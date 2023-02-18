import './styles/global.css'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Header } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-screen h-screen flex justify-center ">
      <div className='w-screen'>

        <Header/>

      </div>    
    </div>
  )
}

export default App
