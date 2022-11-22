import TodoList from "./components/TodoList";
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import { useCallback, useState } from "react";
import { v4 } from 'uuid';
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
  const parentToChild = useCallback ((id) => {
    setTodoList(prevState => prevState.map(item => item.id === id ? {...item, isCompleted : true} : item))
  })
  return (
   <div>
    
    <h3>List work</h3>
    <Textfield name="add-todo" placeholder="Enter work ..." elemAfterInput={<Button isDisabled={!textInput} appearance="primary" onClick={handleAdd}>Add</Button>}
    value={textInput} onChange={handleTextInputChange}
    >
    </Textfield>
    <TodoList todoList={todoList} parentToChild= {parentToChild}/>
   </div>
  );
}

export default App;
