import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Table, TableBody, TableCell, TableRow
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  item: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const VehicleInfo = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)}>
        <CardHeader
          title="Vehicle Information Details"
        />
        <Divider />
        <CardContent>
          <Table className={classes.table} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">Registration Number</TableCell>
              <TableCell align="right">Dhaka Metro KA-126353</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">Vehicle Type</TableCell>
              <TableCell align="right">Car</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">Device Model</TableCell>
              <TableCell align="right">We Track 2</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">SIM Number</TableCell>
              <TableCell align="right">017175646533</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">Center Number</TableCell>
              <TableCell align="right">017175646533</TableCell>
            </TableRow>
        </TableBody>
          </Table>
        </CardContent>
        <Divider />
    </Card>
  );
};

VehicleInfo.propTypes = {
  className: PropTypes.string
};

export default VehicleInfo;
