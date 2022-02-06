import React, { useState, useEffect } from "react";



export const Todo = () => {
 
   const[todos,setTodos]=useState([]);
 const[page,setPage]= useState(1)
const[header,setHeader]= useState([]);
const[count,setCount]= useState(0)
 
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
          }).then(() => getTodo());
    }
  }





  
   
  

  const getTodo = () => {
    fetch(`http://localhost:3004/todos?_page=${page}&_limit=3`)
      .then((d) => {
        setCount([...d.headers][6][1])
       // setHeader(...d.headers)
      return  d.json()
      
      })
      .then((res) => {setTodos([...res])
     
      });
  };

  useEffect(() => {
    getTodo();
}, [page,text]);










  return (
    <>
     
     <input className="inputTitle" type="text"  name="action" placeholder="Title" onChange={(e)=>setAction(e.target.value)}/>
    <input className="inputBody" type="text"  name="task " placeholder="Add Task..." onChange={(e)=>setTask(e.target.value)} />
    <button className="addBtn" onClick={()=>addtodo()} >ADD</button>



 {/* <Todoinput/> */}
     {todos.map((e)=>{
         return(
             
             <>
              <p>{e.title}-{e.status?"done":"notdone"}</p>
             </>
         )
     })}

     <button disabled={page<1} onClick={()=>setPage(page-1)}>Prev</button>
      <button disabled={page>count/3} onClick={()=>setPage(page+1)}>Next</button>  




    </>
  );
