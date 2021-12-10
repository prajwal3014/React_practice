import React from 'react'

export default function Form({ userInput, onFormChange, onFormSubmit }) {
    const handleChange = (event) => {
        onFormChange(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        onFormSubmit()
    }
    return (
        <div className="container">
            <h2>Add a todo item...!</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" className="form-control" id="title" value={userInput} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Item</button>
            </form>
        </div>
    )
}
