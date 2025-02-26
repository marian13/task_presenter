import useHomePageState from '../useHomePageState'

import uniqBy from 'lodash/uniqBy'

const useProjectsSelector = () => {
  const { tasks } = useHomePageState()

  return uniqBy(tasks.map(task => task.project), 'id')
}

export default useProjectsSelector
