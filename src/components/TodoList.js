import React from "react";
import Todo from "./Todo";


export default function TodoList({todoList,parentToChild}) {
  return (
    <div>
      {
        
        todoList.map(todo => <Todo todo={todo} key={todo.id} parentToChild= {parentToChild}/>)
      }
    </div>  
  )
}
