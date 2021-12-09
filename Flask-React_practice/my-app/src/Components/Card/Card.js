import React from 'react'

export default function Card({ listOfTodos }) {
    return (
        <>
            <ul>
                {listOfTodos.map(todo => {
                    return (
                        <li key={todo.sno}>
                            {todo.content}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
