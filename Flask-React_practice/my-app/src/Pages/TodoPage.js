import React,{useState, useEffect} from 'react'
import Card from '../Components/Card/Card'

export default function TodoPage() {
    const [todo, setTodo] = useState([])

    useEffect(() => {
        fetch('/api').then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data => {
            setTodo(data)
            console.log(data)
        })
    }, [])
    
    const [deleteTodo, setDeleteTodo] = useState([])

    useEffect(() => {
        fetch('/delete').then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data => {
            setDeleteTodo(data)
            console.log(data)
        })
    }, [])

    return (
        <>
           <Card listOfTodos = {todo}/>
        </>
    )
}
