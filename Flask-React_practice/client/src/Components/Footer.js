import React from 'react'

export default function Footer() {
    let footer = {
        position: "relative",
        top: "35vh",
        width: "100%"
    }
    return (
        <div className="bg-dark text-light my-3 py-1" style={footer}>
            <p className="text-center">
                Copyright &copy; Prajju_Sharma
            </p>
        </div>
    )
}
