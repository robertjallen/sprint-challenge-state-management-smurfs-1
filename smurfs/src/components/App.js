import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchSmurfs} from '../actions/actions'
import "./App.css";
import Smurf from './Smurf'


export default function App(props) {

  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(()=>{
    dispatch(fetchSmurfs())
    console.log(state)
  },[])

  return (
    <div className="App">
      { state.isLoading ? (<div className="spinner"/>) : (

        <div>
          {state.smurfs.map(item => 
            <Smurf smurf={item} key={item.id}/>  
          )}
        </div>)}


        {/* form  */}


        

</div>
  )
}
