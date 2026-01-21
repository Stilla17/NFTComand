import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Todo = () => {

    const data = useSelector(state => state.todo.todos)

    useEffect(() => {
        console.log(data);
    }, [])
    
    return (
        <div>
            <form >
                <input type="text" placeholder='Enter your Name' />
                <input type="text" placeholder='Enter your Age' />
                <input type="text" placeholder='Enter your Job' />
            </form>
        </div>
    )
}

export default Todo