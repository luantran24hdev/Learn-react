import React from "react";
import Todo from "./Todo";
export default function TodoList({todoList}) {
  return (
    <div>
      {
        // console.log('todoList',todoList)
        todoList.map((todo)=>{
          <Todo todo={todo}/>
        })
      }
   
    
    </div>  
  )
}
