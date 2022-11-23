import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { searchFilterChange, searchFilterByStatus } from "../../redux/actions";
const { Search } = Input;
export default function Filters() {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");
  const [filterStatus, setfilterStatus] = useState("All");
  // const [status, setStatus] = useState("");
  // const [arrPriority, setArrPriority] = useState();

  const inputTextSearch = (e) => {
    setSearchText(e.target.value);
    dispatch(searchFilterChange(e.target.value));
  };

  const handleSelectedStatus = (e) => {
    setfilterStatus(e.target.value);
    console.log("filterStatus", filterStatus);
    dispatch(searchFilterByStatus(e.target.value));
  };

  // const selectStatus = (value) => {
  //   setStatus(value);
  // };
  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          value={searchText}
          placeholder="input search text"
          onChange={inputTextSearch}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterStatus} onChange={handleSelectedStatus}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
        >
          <Select.Option value="High" label="High">
            <Tag color="red">High</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
