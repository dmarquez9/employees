
import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import useEmployeeTypes from '../hooks/useEmployeeTypes';
import { EmployeesProps } from '../types/Employees.types';

type SelectEmployeeTypeProps = {
  [x: string]: any;
}

function SelectEmployeeType(props: SelectEmployeeTypeProps) {
  const { loading, data } = useEmployeeTypes();

  if (!loading && data) {
    return (
      <TextField
        select
        fullWidth
        {...props}
      >
        {data?.map((employeeType: EmployeesProps) => (
          <MenuItem value={employeeType.id} key={employeeType.id}>{employeeType.name}</MenuItem>
        ))}
      </TextField>
    )
  }

  return null
}

export default SelectEmployeeType
