import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="wordlens">
      <Navbar />
      <Footer />
    </div>
  )
}

export default App
