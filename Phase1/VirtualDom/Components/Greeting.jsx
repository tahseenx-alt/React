import React from 'react'

function greeting({name,age}) {
    return (
        <div className="text-center p-8 bg-cyan-800 text-white">
            <h1 className="text-6xl">Hello, {name} : {age}!</h1>
            <p className="text-2xl mt-4">This is a stateless component using a prop.</p>
        </div>
    )
}

export default greeting
