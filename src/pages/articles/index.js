import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllArticle } from "../../store/article/action";
import { useHistory, Link } from "react-router-dom";
import ArticleTable from "../../components/ArticleTable/ArticleTable";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function ArticleList() {
  const [pagesize] = useState(100);
  const [currPage, setCurrPage] = useState(0);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const searchQuery = (event) => {
    console.log(event.key);

    if (event.key === "Enter") {
      event.preventDefault();

      console.log("User pressed Enter ✅", email);
      const payload = {
        pageOffset: currPage,
        pageSize: pagesize,
        query: {
          email: email,
        },
      };
      dispatch(getAllArticle(payload)).then((res) => {
        // if (res.ok && res.data.length === 0) {
        // }
        // console.log("-------res", res);
      });
    }
  };
  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Stack spacing={2} direction="row">
            <Link to="/dashboard/articles/new">
              <Button variant="outlined">Create new Article</Button>
            </Link>
          </Stack>
          <Stack spacing={1} direction="row">
            <TextField
              label="Search"
              placeholder="Fill title..."
              size="small"
              type="text"
              id="outlined-size-small"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              onKeyDown={searchQuery}
            />
          </Stack>
        </div>
      </div>

      <ArticleTable></ArticleTable>
    </div>
  );
}
