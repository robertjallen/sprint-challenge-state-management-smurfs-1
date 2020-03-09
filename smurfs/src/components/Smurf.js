import React from 'react'

export default function Smurf({smurf}) {
    return (
        <div className="card">
            <p>{smurf.name}</p>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
        </div>
    )
}
