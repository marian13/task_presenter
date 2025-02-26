import { gql } from '@apollo/client'

const ON_TASK_CREATED_SUBSCRIPTION = gql`
  subscription onTaskCreated {
    onTaskCreated {
      task {
        id
        name
        project {
          id
          name
        }
      }
    }
  }
`

export default ON_TASK_CREATED_SUBSCRIPTION
