import React from 'react'
import Slider1Simple from './components/Slider1Simple'
import Slider2Multiple from './components/Slider2Multiple'
import Slider3Responsive from './components/Slider3Responsive'
import Slider4MultipleRows from './components/Slider4MultipleRows'
import Slider5Syncing from './components/Slider5Syncing'
import Slider5Syncing2 from './components/Slider5Syncing2'
// import Slider5Syncing2 from './components/Slider5Syncing2'

function App() {
  return (
    <div>
      <Slider1Simple/>
      <Slider2Multiple/>
      <Slider3Responsive/>
      <Slider4MultipleRows/>
      <Slider5Syncing/>
      <Slider5Syncing2/>
      {/* <Slider5Syncing2/> */}
    </div>
  )
}

export default App