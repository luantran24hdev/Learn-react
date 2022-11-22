import TodoList from "./components/TodoList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { useCallback, useState, useEffect, useReducer } from "react";
import EditorRemoveIcon from "@atlaskit/icon/glyph/editor/remove";

import { v4 } from "uuid";
import "./App.css";

const TODO_KEY = "TODO_APP";

const reducer = (state, action) =>{
  switch (action) {
    case 'plus':
      
      return state + 1;
      case 'reduce':
      
      return state - 1;
      case 'remove_all':

      return 0 ;
  
    default:
     return state;
  }
}
function App() {


// test
const [count, dispatch] = useReducer(reducer, 0)

// test

  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");
  useEffect(() => {
    const storagedTodoList = localStorage.getItem(TODO_KEY);
    if (storagedTodoList) {
      setTodoList(JSON.parse(storagedTodoList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_KEY, JSON.stringify(todoList));
  }, [todoList]);

  const handleTextInputChange = (el) => {
    setTextInput(el.target.value);
  };
  const handleAdd = (e) => {
    setTodoList([
      ...todoList,
      { id: v4(), name: textInput, isCompleted: false },
    ]);
    setTextInput("");
  };
  const handleRemoveAll = () => {
    setTodoList([]);
    setTextInput("");
    setTodoList.isCompleted = false;
  };
  const parentToChild = useCallback((id) => {
    setTodoList((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, isCompleted: true } : item
      )
    );
  });
  return (
    <div>

      {/* tesr useReduce */}
      <p>{count}</p>

      <button onClick={()=>{ dispatch('plus') }}>Plus</button>
      <button onClick={()=>{dispatch('reduce')}}>reduce</button>
      <button  onClick={()=>{dispatch('remove_all')}}>Remove all</button>


      {/* tesr */}
      <div className="d-flex">
        <h3>Today</h3>{" "}
        <span>
          <Button
            appearance="danger"
            iconAfter={<EditorRemoveIcon primaryColor="white" />}
            onClick={() => {
              handleRemoveAll();
            }}
          >
            Remove All List Work
          </Button>
        </span>
      </div>
      <Textfield
        name="add-todo"
        placeholder="Enter your work ..."
        elemAfterInput={
          <Button
            isDisabled={!textInput}
            appearance="primary"
            onClick={handleAdd}
          >
            New
          </Button>
        }
        value={textInput}
        onChange={handleTextInputChange}
      ></Textfield>
      <TodoList todoList={todoList} parentToChild={parentToChild} />
    </div>
  );
}

export default App;
