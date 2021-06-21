
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';

type SelectPageProps = {
  value: number;
  handlePage: (event: React.ChangeEvent<{ value: unknown }>) => void;
  total: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }),
);

function SelectPage({ value, handlePage, total }: SelectPageProps) {
  const pageSize: number = Math.ceil(total / 10);
  const classes = useStyles();

  return (
    <Box mt={4}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel>Select Page</InputLabel>
        <Select
          value={value}
          onChange={handlePage}
          label="Select Page"
        >
          {Array.from(Array(pageSize).keys()).map((page) => (
            <MenuItem value={page + 1} key={page + 1}>{page + 1}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectPage
