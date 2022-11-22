import TodoList from "./components/TodoList";
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import { useCallback, useState } from "react";
import EditorRemoveIcon from '@atlaskit/icon/glyph/editor/remove'

import { v4 } from 'uuid';
import './App.css'
function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState('');
  const handleTextInputChange = (el) =>{
    setTextInput(el.target.value)
  }
  const handleAdd = (e)=>{
    setTodoList([...todoList, {id: v4(), name: textInput, isCompleted: false}])
    setTextInput('')
  }
  const handleRemoveAll = ()=>{
    setTodoList([]);
    setTextInput('');
    setTodoList.isCompleted = false
  }
  const parentToChild = useCallback ((id) => {
    setTodoList(prevState => prevState.map(item => item.id === id ? {...item, isCompleted : true} : item))
  })
  return (
   <div>
    
    <div className="d-flex">
    <h3>Today</h3> <span><Button appearance="danger" iconAfter={ <EditorRemoveIcon primaryColor='white'/>} onClick={()=>{handleRemoveAll()}}>Remove All List Work</Button></span>
    </div>
    <Textfield name="add-todo" placeholder="Enter your work ..." elemAfterInput={<Button isDisabled={!textInput} appearance="primary" onClick={handleAdd}>New</Button>}
    value={textInput} onChange={handleTextInputChange}
    >
    </Textfield>
    <TodoList todoList={todoList} parentToChild= {parentToChild}/>
   </div>
  );
}

export default App;
