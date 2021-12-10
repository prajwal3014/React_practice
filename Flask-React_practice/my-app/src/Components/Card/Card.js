import React from 'react'

export default function Card({ listOfTodos }) {
    return (
        <>
            {listOfTodos.map(todo => {
                return (
                    <>
                        <div className="container my-3">
                            <h5 key={todo.sno}>
                                {todo.title}
                            </h5>
                            <form action="/delete" method="post">
                                <button value={todo.sno} name='delete-btn' className='btn btn-sm btn-danger'>Delete</button>
                            </form>
                            <hr />
                        </div>
                    </>
                )
            })}
        </>
    )
}
