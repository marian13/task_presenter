import React from 'react'

import Loader from '../../../../components/Loader'

import useFilterBehaviour from './hooks/useFilterBehaviour'

const Filter = () => {
  const { projects, pageDataLoading, isProjectSelected, onProjectClick } = useFilterBehaviour()

  return (
    <fieldset>
      <legend>Select projects to display</legend>

      <Loader show={pageDataLoading} />

      {projects.map((project) => (
        <label key={project.id}>
          <input
            type='checkbox'
            name={project.name}
            defaultChecked={isProjectSelected(project)}
            data-test-id='project'
            onClick={event => onProjectClick(event, project)}
          />
          {project.name} ({project.id})
        </label>
      ))}
    </fieldset>
  )
}

export default Filter
