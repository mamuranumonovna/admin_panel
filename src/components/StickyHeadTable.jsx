import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useGlobalContext } from '../context';
import SingleClient from '../pages/SingleClient';
import { useNavigate } from 'react-router-dom';


const columns = [
  { id: 'title', label: 'Название', minWidth: 170 },
  {
    id: 'tel',
    label: 'Номер телефона',
    minWidth: 170,
  },
  {
    id: 'status',
    label: 'Статус',
    minWidth: 170,
    align: 'right',
  },
];

function createData(title, tel, status) {
  return { title, tel, status };
}

const rows = [
  createData('Ronald Richards', '(907) 555-0101', 'Active'),
  createData('Devon Lane', '(319) 555-0115', 'InActive'),
  createData('Kathryn Murphy', '(684) 555-0102', 'Active'),
  createData('Darrell Steward', '(252) 555-0126', 'InActive'),
  createData('Dianne Russell', '(302) 555-0107', 'Active'),
  createData('Jane Cooper', '(219) 555-0114', 'InActive'),
  createData('Eleanor Pena', '(603) 555-0123', 'Active'),
  createData('Kristin Watson', '(270) 555-0117', 'InActive'),
  createData('Robert Fox', '(205) 555-0100', 'Active'),
];

export default function StickyHeadTable() {
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    selectedRow,
    navigateToSingleClient,
    searchInput,
    setSearchInput
  } = useGlobalContext();




  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
            .filter((row) => row.title.toLowerCase().includes(searchInput.toLowerCase()))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                const isSelected = selectedRow && selectedRow.title === row.title;
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.title}
                    selected={isSelected}
                    onClick={() => navigateToSingleClient(row)}
                  >
                    {columns.map((column) => (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof row[column.id] === 'number'
                          ? column.format(row[column.id])
                          : row[column.id]}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 15, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    
    </Paper>
  );
}
