import PropTypes from "prop-types";
import TableHead from "@mui/material/TableHead";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllArticle } from "../../store/article/action";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
// import { pink } from "@mui/material/colors";
import { Link, useParams } from "react-router-dom";
import { fetchArticleById } from "../../store/article/action";
import TablePaginationAction from "../UserTable/TablePaginationAction";
import StyledTableCellComp from "../UserTable/StyledTableCell";

const StyledTableCell = StyledTableCellComp;

TablePaginationAction.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function CustomPaginationActionsTable() {
  //

  const dispatch = useDispatch();
  const params = useParams();
  const [pagesize] = useState(100);
  const [currPage, setCurrPage] = useState(0);
  const listAllArticle = useSelector((state) => state.Article.listAllArticle);
  const metaAllArticle = useSelector((state) => state.Article.metaAllArticle);
  useEffect(() => {
    const payload = {
      pageOffset: currPage,
      pageSize: pagesize,
      query: "",
    };
    dispatch(getAllArticle(payload)).then((res) => {
      // if (res.ok && res.data.length === 0) {
      // }
      // console.log("-------res", res);
    });
  }, [dispatch, currPage, pagesize]);

  //

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - listAllArticle.length)
      : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getArticleId = (row) => {
    // e.preventDefault();
    dispatch(fetchArticleById(row));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="left">Title</StyledTableCell>
            <StyledTableCell align="left">Author</StyledTableCell>
            <StyledTableCell align="left">Publish Date</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? listAllArticle.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : listAllArticle
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.author.last_name}</TableCell>
              <TableCell align="left">{row.published_at}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="right">
                <Link to={`/dashboard/articles/edit/${row.id}`}>
                  <DriveFileRenameOutlineIcon
                    onClick={() => getArticleId(row)}
                    color="primary"
                    size="small"
                  />
                </Link>
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={listAllArticle.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationAction}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
