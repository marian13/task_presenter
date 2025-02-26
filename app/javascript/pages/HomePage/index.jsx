import React from 'react'

import Filter from './components/Filter'
import Switch from './components/Switch'
import Table from './components/Table'

import HomePageContext from './contexts/HomePageContext'
import useHomePageReducer from './hooks/useHomePageReducer'

const HomePage = () => {
  const [homePageState, homePageDispatch] = useHomePageReducer()

  return (
    <HomePageContext.Provider value={{ homePageState, homePageDispatch }}>
      <main style={{ marginLeft: 20 }}>
        <div style={{ display: 'flex', marginTop: 20 }}>
          <div style={{ minWidth: 350, maxWidth: 350, marginRight: 20 }}>
            <Filter />
          </div>

          <div>
            <Switch />
            <Table />
          </div>
        </div>
      </main>
    </HomePageContext.Provider>
  )
}

export default HomePage
