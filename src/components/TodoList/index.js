import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { todosRemainingSelector } from "../../redux/selector";
import { v4 } from "uuid";
import { useState, useEffect, useCallback } from "react";

import todoListSlice from "./TodosSlice";

const TODO_KEY_NEW = "TODO_APP_NEW";
export default function TodoList() {
  const dispatch = useDispatch();
  const [firstLoad, setFirstLoad] = useState(true);
  const [todoName, setTodoName] = useState("");
  const [todoPriority, setPriority] = useState("Medium");

  const todoList = useSelector(todosRemainingSelector);
  useEffect(() => {
    if (!firstLoad) {
      localStorage.setItem(TODO_KEY_NEW, JSON.stringify(todoList));
    } else {
      setFirstLoad(false);
    }
  }, [todoList]);

  useEffect(() => {
    // const dataGetLocalStorage = ;
    const parsrData = JSON.parse(localStorage.getItem(TODO_KEY_NEW));
    if (parsrData && parsrData.length != 0) {
      dispatch(todoListSlice.actions.newTodoList(parsrData));
    }
  }, []);

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };
  const handleAddButtonSelect = (value) => {
    setPriority(value);
  };

  const handleAddButtonClick = () => {
    setTodoName("");
    //dispath
    dispatch(
      todoListSlice.actions.addTodo({
        id: v4(),
        name: todoName,
        priority: todoPriority,
        completed: false,
      })
    );
  };
  const handleRemoveAll = () => {
    dispatch(todoListSlice.actions.removeTodoList([]));
  };
  const parentToChild = useCallback((id) => {
    dispatch(todoListSlice.actions.removeOneItem(id));

    // console.log("id12", id);
    // setTodoList((prevState) =>
    //   prevState.map((item) =>
    //     item.id === id ? { ...item, isCompleted: true } : item
    //   )
    // );
  });
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Button
        onClick={() => {
          handleRemoveAll();
        }}
        style={{ marginBottom: "15px" }}
        type="danger"
      >
        Remove All
      </Button>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={todoPriority}
            onChange={handleAddButtonSelect}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>

          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((item) => (
          <Todo
            id={item.id}
            key={item.id}
            name={item.name}
            prioriry={item.priority}
            completed={item.completed}
            parentToChild={parentToChild}
          />
        ))}
      </Col>
    </Row>
  );
}
