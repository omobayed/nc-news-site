import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Articles from './components/Articles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Nav />
      <Articles />


      <div><h1>NC News</h1></div>
      <p>Check here to view more articles</p>
    </>
  )
}

export default App
