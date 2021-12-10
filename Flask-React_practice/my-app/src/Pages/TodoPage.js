import React, { useState, useEffect } from 'react'
import Card from '../Components/Card/Card'
import Form from './Form'

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

    const handleFormChange = (inputValue) => {
        setAddTodo(inputValue)
    }

    const handleFormSubmit = () => {
        fetch('/api/create', {
            method: 'POST',
            body: JSON.stringify({
                title: addTodo
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json())
            .then(message => {
                setAddTodo('')
                console.log(message)
            })
    }

    useEffect(() => {
        fetch('/api').then(response => {
            if (response.ok) {
                return response.json()
            }
        }).then(data => setTodo(data))
    }, [])

    return (
        <>
            <Form userInput={addTodo} onFormChange={handleFormChange} onFormSubmit={handleFormSubmit} />
            <Card listOfTodos={todo} />
        </>
    )
}
