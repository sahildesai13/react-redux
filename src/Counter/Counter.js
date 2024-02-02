import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, demo, increment,updateName,updateEmail, addValue} from '../reduxApp/CounterSlice'

function Counter() {
    const count = useSelector((state) => state.counter.value)
    const name = useSelector((state) => state.counter.name)
    const email = useSelector((state) => state.counter.email)
    
    const dispatch = useDispatch()
    return (
        <div>
            <h1> Count : {count}</h1>
            <h1> Name : {name}</h1>
            <h1>Email : {email}</h1>
            <input type="number" onChange={(e)=>{dispatch(addValue(e.target.value))}} />
            <br />
            <button onClick={()=>{dispatch(increment())}}>increment</button>
            <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
            <button onClick={()=>{dispatch(demo())}}>Increment by 5</button>
            <button onClick={()=>{dispatch(updateName('radhe'))}}>change name</button>
            <button onClick={()=>{dispatch(updateEmail('email'))}}>change Email</button>
        </div>
    )
}

export default Counter