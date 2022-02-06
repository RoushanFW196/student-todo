
import React,{ useState} from 'react';


export const Todolist=()=>{
 const[todos,setTodos]=useState([]);


    const getTodo = () => {
        fetch(`http://localhost:3004/todos?_page=${page}&_limit=3`)
          .then((d) => {
            setCount([...d.headers][6][1])
           // setHeader(...d.headers)
          return  d.json()
          
          })
          .then((res) => {setTodos([...res])
         
          });







    return(
        <>


        </>
    )
}
}