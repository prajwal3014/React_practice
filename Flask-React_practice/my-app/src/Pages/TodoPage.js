import React, { useState, useEffect } from 'react'
import Card from '../Components/Card/Card'
import Form from './Pages/Form';

export default function TodoPage() {
    const [todo, setTodo] = useState([])

    useEffect(() => {
        fetch('/api').then(response => {
            if (response.ok) {
                return response.json()
            }
        }).then(data => {
            setTodo(data)
            console.log(data)
        })
    }, [])

    const [addTodo, setAddTodo] = useState('')

    return (
        <>
            <Form userInput={addTodo} />
            <Card listOfTodos={todo} />
        </>
    )
}
