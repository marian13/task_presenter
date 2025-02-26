import useHomePageState from '../../../hooks/useHomePageState'
import useProjectsSelector from '../../../hooks/selectors/useProjectsSelector'
import useIsProjectSelectedSelector from '../../../hooks/selectors/useIsProjectSelectedSelector'
import useHomePageDispatch from '../../../hooks/useHomePageDispatch'

const useFilterBehaviour = () => {
  const { pageDataLoading } = useHomePageState()

  const projects = useProjectsSelector()
  const isProjectSelected = useIsProjectSelectedSelector()

  const dispatch = useHomePageDispatch()

  const onProjectClick = (event, project) => {
    if (event.target.checked) {
      dispatch({ type: 'SELECT_PROJECT_TO_DISPLAY', payload: { project } })
    } else {
      dispatch({ type: 'REMOVE_PROJECT_FROM_DISPLAY', payload: { project } })
    }
  }

  return {
    projects,
    pageDataLoading,
    isProjectSelected,
    onProjectClick
  }
}

export default useFilterBehaviour
