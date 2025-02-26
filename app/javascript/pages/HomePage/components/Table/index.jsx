import React from 'react'

import Row from './components/Row'

import Loader from '../../../../components/Loader'
import Error from '../../../../components/Error'

import useTableBehaviour from './hooks/useTableBehaviour'

const Table = () => {
  const { tasks, pageDataLoading, pageDataError } = useTableBehaviour()

  if (pageDataLoading) return <Loader />
  if (pageDataError) return <Error message={pageDataError.message} />

  return (
    <div data-test-id='table'>
      {tasks.map(task => <Row key={task.id} {...task} />)}
    </div>
  )
}

export default Table
