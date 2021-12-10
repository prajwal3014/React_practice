import React from 'react'

export default function Form() {
    return (
        <div className="container">
            <h2>Add a todo item...!</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="email" className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Item</button>
            </form>
        </div>
    )
}
