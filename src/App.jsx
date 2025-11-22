import NavBar from '#components/NavBar'
import Welcome from '#components/Welcome'
import Dock from '#components/Dock'
import React from 'react'

const App = () => {
  return (
    <main>
      <NavBar/>
      <Welcome/>
      <Dock/>
    </main>
  )
}

export default App