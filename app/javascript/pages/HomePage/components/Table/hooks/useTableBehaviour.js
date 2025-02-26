import useHomePageState from '../../../hooks/useHomePageState'
import useIsProjectSelectedSelector from '../../../hooks/selectors/useIsProjectSelectedSelector'

import orderBy from 'lodash/orderBy'

const useTableBehaviour = () => {
  const { tasks: allTasks, pageDataLoading, pageDataError } = useHomePageState()
  const isProjectSelected = useIsProjectSelectedSelector()

  const tasks = orderBy(
    allTasks.filter(task => isProjectSelected(task.project)),
    [task => Date.parse(task.createdAt)],
    ['desc']
  )

  return { tasks, pageDataLoading, pageDataError }
}
export default useTableBehaviour
