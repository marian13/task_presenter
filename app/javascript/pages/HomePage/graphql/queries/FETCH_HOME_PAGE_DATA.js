import { gql } from '@apollo/client'

const FETCH_HOME_PAGE_DATA = gql`
  query fetchHomePageData {
    tasks {
      id
      name
      project {
        id
        name
      }
    }
  }
`

export default FETCH_HOME_PAGE_DATA
