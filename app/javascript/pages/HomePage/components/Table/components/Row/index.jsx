import React from 'react'

import useRowBehaviour from './hooks/useRowBehaviour'

const Row = ({ id, name, blurOnMount, project: { id: projectId, name: projectName } }) => {
  const { displayStyleValue, filterStyleValue } = useRowBehaviour({ blurOnMount })

  return (
    <article key={id} style={{ maxWidth: 250, marginRight: 20, display: displayStyleValue, filter: filterStyleValue }} data-test-id='task'>
      <b>Task: </b> {name}

      <footer>
        <b>Project: </b> {projectName} ({projectId})
      </footer>
    </article>
  )
}

export default Row
