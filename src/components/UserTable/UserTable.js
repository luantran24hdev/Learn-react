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
import { getAllUser } from "../../store/user/action";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
// import { pink } from "@mui/material/colors";
import { Link, useParams } from "react-router-dom";
import { fetchUserById } from "../../store/user/action";
import TablePaginationAction from "./TablePaginationAction";
import StyledTableCellComp from "./StyledTableCell";

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
  const listAllUser = useSelector((state) => state.User.listAllUser);
  const metaAllUser = useSelector((state) => state.User.metaAllUser);
  useEffect(() => {
    const payload = {
      pageOffset: currPage,
      pageSize: pagesize,
      query: "",
    };
    dispatch(getAllUser(payload)).then((res) => {
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - listAllUser.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getUserId = (row) => {
    // e.preventDefault();
    dispatch(fetchUserById(row));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? listAllUser.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : listAllUser
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>

              <TableCell align="right">
                <Link to={`/dashboard/users/edit/${row.id}`}>
                  <DriveFileRenameOutlineIcon
                    onClick={() => getUserId(row)}
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
              count={listAllUser.length}
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
