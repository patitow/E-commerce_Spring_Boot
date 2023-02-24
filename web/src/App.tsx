import './styles/global.css'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/RadixHeader'
import { MainPage } from './components/MainPage'

function App() {
  
  return (
    <div className="w-screen h-screen flex justify-center ">
      <div className='w-screen'>
        <Header/>
        <MainPage/>
      </div>    
    </div>
  )
}

export default App
