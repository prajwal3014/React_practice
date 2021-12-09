import React from 'react'

export default function AddTodo() {
    return (
        <div className="container my-3">
            <h3>Add a Todo Item in your Todos List...!</h3>
            <form action='/add' method='post'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Item</button>
            </form>
            <br />
        </div>
    )
}
