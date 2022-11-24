import { Row, Tag, Checkbox, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { SizeType } from "antd/es/config-provider/SizeContext";

import { useState } from "react";
import { useDispatch } from "react-redux";
// import { toggleTodo } from "../../redux/actions";

import todoListSlice from "../TodoList/TodosSlice";
const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ name, prioriry, completed, id, parentToChild }) {
  const [size, setSize] = useState("small"); // default is 'middle'

  const dispatch = useDispatch();
  const [checked, setChecked] = useState(completed);

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(todoListSlice.actions.toggleTodo(id));
  };

  return (
    <Row
      justify="space-between"
      style={{
        marginTop: 6,
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>

      <div style={{ display: "flex" }}>
        <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
          {prioriry}
        </Tag>
        <Button
          style={{ marginLeft: "5px" }}
          type="danger"
          icon={<CloseOutlined />}
          size={size}
          onClick={() => {
            parentToChild(id);
          }}
        />
      </div>
    </Row>
  );
}
