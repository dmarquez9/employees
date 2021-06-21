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

import { EmployeeTypesProps } from '../types/EmployeeTypes.types';
import UpdateEmployeeType from './UpdateEmployeeType';
import DeleteEmployeeType from './DeleteEmployeeType';


type EmployeeTypesTableProps = {
  rows: EmployeeTypesProps[];
  refetch: () => void;
}

const EmployeeTypesTable: React.FC<EmployeeTypesTableProps> = ({ rows, refetch }) => {
  const [data, setData] = React.useState<EmployeeTypesProps | undefined>();
  const [openUpdate, setOpenUpdate] = React.useState<boolean>(false);
  const [openDelete, setOpenDelete] = React.useState<boolean>(false);

  const handleUpdateIcon = (employeeType: EmployeeTypesProps) => {
    setData(employeeType)
    setOpenUpdate(true)
  }

  const handleDeleteIcon = (employeeType: EmployeeTypesProps) => {
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
              <TableCell width="45%" align="center">Color</TableCell>
              <TableCell />
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: EmployeeTypesProps) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" width="45%">
                  {row.name}
                </TableCell>
                <TableCell align="center" width="45%">{row.color}</TableCell>
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
        <UpdateEmployeeType
          open={openUpdate}
          handleClose={() => {
            setOpenUpdate(false)
            refetch()
          }}
          data={data}
        />
      )}
      {data && openDelete && (
        <DeleteEmployeeType
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

export default EmployeeTypesTable
