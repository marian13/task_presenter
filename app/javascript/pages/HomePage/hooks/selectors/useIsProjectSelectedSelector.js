import useHomePageState from '../useHomePageState'
import arrayInclude from '../../../../utils/array/include'

const useIsProjectSelectedSelector = () => {
  const { selectedProjects } = useHomePageState()

  return project => arrayInclude(selectedProjects, selectedProject => selectedProject.id === project.id)
}

export default useIsProjectSelectedSelector
