import { useContext } from 'react'

import HomePageContext from '../contexts/HomePageContext'

const useHomePageState = () => {
  const { homePageState } = useContext(HomePageContext)

  return homePageState
}

export default useHomePageState
