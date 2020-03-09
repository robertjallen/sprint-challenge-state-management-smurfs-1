import React, {useState} from 'react'
import { addSmurf } from '../actions/actions'
import { useSelector, useDispatch } from "react-redux";

function Form(props) {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    console.log("form",props)

    const [newSmurf, setNewSmurf] =useState({})

    const handleChange = (e) => {
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("newsmurf",newSmurf)
        dispatch(addSmurf(newSmurf))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="name" onChange={handleChange} value={newSmurf.name}/>
            <input name="age" placeholder="age" onChange={handleChange} value={newSmurf.age}/>
            <input name="height" placeholder="height" onChange={handleChange} value={newSmurf.height}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form