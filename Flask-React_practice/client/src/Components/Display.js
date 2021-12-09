import React from 'react'

export default function Display(props) {
    return (
        <>
        <div className='container'>
            <h1>{props.data}</h1>
            <h1>{props.add}</h1>
        </div>
        </>
    )
}
