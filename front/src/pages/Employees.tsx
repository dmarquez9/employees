import React from 'react';
import { useQuery } from '@apollo/client';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import CreateEmployees from '../components/CreateEmployees';
import EmployeesTable from '../components/EmployeesTable';
import SelectPage from '../components/SelectPage';
import { GET_EMPLOYEES } from '../queries/Employees.queries';

const Employees: React.FC = () => {
  const [page, setPage] = React.useState<number>(1);
  const { loading, data, refetch } = useQuery(GET_EMPLOYEES, {
    variables: {
      limit: 10,
      offset: (page - 1) * 10
    }
  });

  const [open, setOpen] = React.useState<boolean>(false);
  const handleCloseCreate = () => {
    setOpen(false)
    refetch()
  }

  const handlePage = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPage(event.target.value as number);
  };

  return (
    <>
      <Grid container>
        <Grid item xs>
          <Typography variant="h4" gutterBottom>
            Employees
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
            Create a new employee
          </Button>
        </Grid>
      </Grid>
      {loading ? <CircularProgress /> : null}
      {!loading && data ? (
        <EmployeesTable
          rows={data?.employees?.data}
          refetch={refetch}
        /> 
      ) : null}
      {!data && !loading ? (
        <Typography paragraph align="center">
          No employees created!
        </Typography>
      ) : null}
      <SelectPage value={page} total={data?.employees?.total} handlePage={handlePage} />
      <CreateEmployees open={open} handleClose={() => handleCloseCreate()} />
    </>
  )
}

export default Employees
