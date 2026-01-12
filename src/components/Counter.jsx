import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'

const Counter = () => {

  const counter = useSelector((state) => state.counter.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter Component</h1>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter