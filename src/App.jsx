import { useState } from 'react'
// import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { incNumber, decNumber } from './action/Index'

function App() {
  const addState= useSelector((state) => state.changeTheNumber)
  const removeState = useSelector((state) => state.changeNumber)
  const final = addState + removeState
  const dispatch = useDispatch()

  return (
    <>
    <h1>welocome to redux</h1>
    <div className="display">
      <button onClick={() => dispatch(decNumber())} title='Decrement' >-</button>
      <h1>{final}</h1>
      <button onClick={() => dispatch(incNumber())} title='Increment' >+</button>
    </div>
    </>
  )
}

export default App
