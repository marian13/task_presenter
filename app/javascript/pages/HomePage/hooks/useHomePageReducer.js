import { useEffect, useReducer } from 'react'
import { useQuery } from '@apollo/client'

import FETCH_HOME_PAGE_DATA from '../graphql/queries/FETCH_HOME_PAGE_DATA'
import ON_TASK_CREATED_SUBSCRIPTION from '../graphql/subscriptions/ON_TASK_CREATED_SUBSCRIPTION'

import { DISPLAY_MODES, NEXT_DISPLAY_MODES } from '../constants'

import isEmpty from 'lodash/isEmpty'
import get from 'lodash/get'
import uniq from 'lodash/uniq'

import arrayAdd from '../../../utils/array/add'
import arrayRemove from '../../../utils/array/remove'

const initialPageState = {
  displayMode: window.localStorage.getItem('displayMode') || DISPLAY_MODES.VERTICAL_LIST,
  tasks: [],
  selectedProjects: [],
  pageDataLoading: true,
  pageDataError: null
}

const pageReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'SWITCH_DISPLAY_MODE': {
      const currentDisplayMode = payload.currentDisplayMode
      const nextDisplayMode = NEXT_DISPLAY_MODES[currentDisplayMode] || initialPageState.displayMode

      window.localStorage.setItem('displayMode', nextDisplayMode)

      return { ...state, displayMode: nextDisplayMode }
    }
    case 'FETCH_PAGE_DATA_SUCCESS': {
      return {
        ...state,
        tasks: payload.pageData.tasks.map(task => ({ ...task, blurOnMount: false })),
        selectedProjects: uniq(payload.pageData.tasks.map(task => task.project)),
        pageDataLoading: false,
        pageDataError: null
      }
    }
    case 'FETCH_PAGE_DATA_ERROR': {
      return {
        ...state,
        tasks: [],
        selectedProjects: [],
        pageDataLoading: false,
        pageDataError: payload.pageDataError
      }
    }
    case 'SELECT_PROJECT_TO_DISPLAY': {
      return {
        ...state,
        selectedProjects: arrayAdd(state.selectedProjects, payload.project)
      }
    }
    case 'REMOVE_PROJECT_FROM_DISPLAY': {
      return {
        ...state,
        selectedProjects: arrayRemove(state.selectedProjects, project => project.id === payload.project.id),
        tasks: state.tasks.map(task => ({ ...task, blurOnMount: task.project.id === payload.project.id }))
      }
    }
    case 'ON_TASK_CREATED': {
      return {
        ...state,
        tasks: arrayAdd(state.tasks, { ...payload.task, blurOnMount: true })
      }
    }
    default: {
      console.log(`Unknown action type ${action.type}`)

      return state
    }
  }
}

const useHomePageReducer = () => {
  const [state, dispatch] = useReducer(pageReducer, initialPageState)

  const { loading: pageDataLoading, error: pageDataError, data: pageData, subscribeToMore } = useQuery(FETCH_HOME_PAGE_DATA)

  useEffect(() => {
    if (pageDataLoading) return

    return pageDataError ? dispatch({ type: 'FETCH_PAGE_DATA_ERROR', payload: { pageDataError } }) : dispatch({ type: 'FETCH_PAGE_DATA_SUCCESS', payload: { pageData } })
  }, [pageDataLoading, pageDataError])

  useEffect(() => {
    subscribeToMore({
      document: ON_TASK_CREATED_SUBSCRIPTION,
      updateQuery: (queryData, { subscriptionData }) => {
        const newTask = get(subscriptionData, 'data.onTaskCreated.task')

        if (isEmpty(queryData)) return queryData
        if (!newTask) return queryData

        dispatch({ type: 'ON_TASK_CREATED', payload: { task: newTask } })

        return { ...queryData, tasks: [...queryData.tasks, newTask] }
      }
    })
  }, [])

  return [state, dispatch]
}

export default useHomePageReducer
