import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { EmployeesProps } from '../types/Employees.types';
import UpdateEmployee from './UpdateEmployee';
import DeleteEmployee from './DeleteEmployee';

type EmployeesTableProps = {
  rows: EmployeesProps[];
  refetch: () => void;
}

export default function EmployeesTable({
  rows,
  refetch
}: EmployeesTableProps) {
  const [data, setData] = React.useState<EmployeesProps | undefined>();
  const [openUpdate, setOpenUpdate] = React.useState<boolean>(false);
  const [openDelete, setOpenDelete] = React.useState<boolean>(false);

  const handleUpdateIcon = (employee: EmployeesProps) => {
    setData(employee)
    setOpenUpdate(true)
  }

  const handleDeleteIcon = (employeeType: EmployeesProps) => {
    setData(employeeType)
    setOpenDelete(true)
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="employee types table">
          <TableHead>
            <TableRow>
              <TableCell width="45%">Name</TableCell>
              <TableCell width="45%" align="center">Employee</TableCell>
              <TableCell />
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: EmployeesProps) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" width="45%">
                  {row.name}
                </TableCell>
                <TableCell align="center" width="45%">{row.employeeType.name}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleUpdateIcon(row)}><EditIcon /></IconButton>
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => handleDeleteIcon(row)}
                    color="secondary"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {data && openUpdate && (
        <UpdateEmployee
          open={openUpdate}
          handleClose={() => {
            setOpenUpdate(false)
            refetch()
          }}
          data={data}
        />
      )}
      {data && openDelete && (
        <DeleteEmployee
          open={openDelete}
          handleClose={() => {
            setOpenDelete(false)
            refetch()
          }}
          data={data}
        />
      )}
    </>
  );
}
