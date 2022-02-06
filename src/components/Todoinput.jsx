
//import { add } from 'cypress/types/lodash';
import React,{ useState} from 'react';
import "./Todoinput.css"


export const Todoinput=()=>{

    const[action,setAction]=useState("");
    const[task,setTask]=useState("")
   
    const addtodo=()=>{
        const data={
            task: task,
            title: action,
           
            status: false
        }
        fetch("http://localhost:3004/todos", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
            "content-type": "application/json",
            },
          })
    }



    return(
        <>
    <input className="inputTitle" type="text"  name="action" placeholder="Title" onChange={(e)=>setAction(e.target.value)}/>
    <input className="inputBody" type="text"  name="task " placeholder="Add Task..." onChange={(e)=>setTask(e.target.value)} />
    <button className="addBtn" onClick={()=>addtodo()} >ADD</button>
        </>
    )
}