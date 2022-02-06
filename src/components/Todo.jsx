
import React,{ useState,useEffect} from 'react';
import { v4 as uuid} from 'uuid';
 import "./Todoinput.css";

export const Todo=()=>{

    const[action,setAction]=useState("");
    const[task,setTask]=useState("")
   const[todos,setTodos]=useState([])
   const[page,setPage]= useState(1)
 //const[header,setHeader]= useState([]);
const[count,setCount]= useState(0)

    const addtodo=()=>{
        const data={
            Task: task,
            Title: action,
             status: false,
             id:uuid(),
        }
        fetch("http://localhost:3004/todos", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
            "content-type": "application/json",
            },
          }).then(()=>getTodo());
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



useEffect(()=>{
    getTodo()
},[page])


const deleteTodo =(id)=>{

    let newtodo=todos.filter((el)=>{
        return(el.id !==id)
    })
    setTodos([...newtodo]);
   console.log(newtodo)
    console.log(id)
}

  





   
  


    return(
        <div className="todobody">
            <h1 className="title">Todo...</h1>
            <input className="inputTitle" type="text"   placeholder="Title" onChange={(e)=>setAction(e.target.value)}/>
    <input className="inputBody" type="text"   placeholder="Add Task..." onChange={(e)=>setTask(e.target.value)} />
    <button className="addBtn" onClick={()=>addtodo()} >Add</button>

       
       <div className="container">

      
       {todos.map((e)=>{
           return(
                <div className="todoItem">
                 <div> {e.Title}-{e.Task}</div>
                 <div><button onClick={()=>deleteTodo(e.id)}>delete</button></div>
                </div>
           )
       })}

       </div>

       
       <div className="lowbtn">
       <button  className="prev" disabled={page<1} onClick={()=>setPage(page-1)}>Prev</button>
      <button disabled={page>count/3} onClick={()=>setPage(page+1)}>Next</button>  
</div>
        </div>
    )
}