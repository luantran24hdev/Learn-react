import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";
import { todoListSelector, searchTextSelector } from "../../redux/selector";
import { v4 } from "uuid";
import { useState } from "react";
export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [todoPriority, setPriority] = useState("Medium");

  const todoList = useSelector(todoListSelector);
  const searchText = useSelector(searchTextSelector);
  console.log("todoListSelector----------", todoList);
  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };
  const handleAddButtonSelect = (value) => {
    setPriority(value);
  };

  const dispatch = useDispatch();
  const handleAddButtonClick = () => {
    setTodoName("");
    //dispath
    dispatch(
      addTodo({
        id: v4(),
        name: todoName,
        priority: todoPriority,
        completed: false,
      })
    );
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((item) => (
          <Todo key={item.id} name={item.name} prioriry={item.priority} />
        ))}
      </Col>
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
    </Row>
  );
}
