import { useState } from 'react'
import './App.css'
import PagingPosts from './PagingPosts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PagingPosts />
    </>
  )
}

export default App
