import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import useEmployeeTypes from '../hooks/useEmployeeTypes';
import EmployeeTypesTable from '../components/EmployeeTypesTable';

const EmployeeTypes: React.FC = () => {
  const { loading, data } = useEmployeeTypes();

  return (
    <>
      <Grid container>
        <Grid item xs>
          <Typography variant="h4" gutterBottom>
            Employee Types
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Button variant="contained" color="primary">
            Create a new employee type
          </Button>
        </Grid>
      </Grid>
      {loading ? <CircularProgress /> : null}
      {!loading && data ? <EmployeeTypesTable rows={data} /> : null}
      {!data && !loading ? (
        <Typography paragraph align="center">
          No employee types created!
        </Typography>
      ) : null}
    </>
  )
}

export default EmployeeTypes
