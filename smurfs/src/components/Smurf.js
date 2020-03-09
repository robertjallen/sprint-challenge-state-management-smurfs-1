import React from 'react'

export default function Smurf({smurf}) {
    return (
        <div className="card">
            <p>NAME: {smurf.name}</p>
            <p>AGE: {smurf.age}</p>
            <p>HEIGHT: {smurf.height}</p>
        </div>
    )
}
