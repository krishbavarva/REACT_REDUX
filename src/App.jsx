import { useState } from 'react'
// import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { incNumber, decNumber } from './action/Index'

function App() {
  const myState= useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch()

  return (
    <>
    <h1>welocome to redux</h1>
    <div className="display">
      <button onClick={() => dispatch(decNumber())} title='Decrement' >-</button>
      <h1>{myState}</h1>
      <button onClick={() => dispatch(incNumber())} title='Increment' >+</button>
    </div>
    </>
  )
}

export default App
