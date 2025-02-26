import { useContext } from 'react'

import HomePageContext from '../contexts/HomePageContext'

const useHomePageDispatch = () => {
  const { homePageDispatch } = useContext(HomePageContext)

  return homePageDispatch
}

export default useHomePageDispatch
