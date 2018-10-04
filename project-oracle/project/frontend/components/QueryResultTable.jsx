import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  paper: {
    // marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {},
});

let id = 0;

function createData(season, ip, h, r, er, hr, bb, so, w, l, pgs, whip, baa,
    era) {
  id += 1;
  return {id, season, ip, h, r, er, hr, bb, so, w, l, pgs, whip, baa, era}
}

const data = [
  createData('2017 Regular Season', 2.31, 175.0, 136, 49, 45, 23, 30, 202, 18,
      4, 93.4, 0.95, .212),
  createData('2017 Postseason', 3.82, 33.0, 21, 14, 14, 8, 10, 33, 3, 0, 90.6,
      0.94, .179),
  createData('Career', 2.36, 1935.0, 1431, 554, 508, 128, 507, 2120, 144, 64,
      101.0, 1.00, .206),
];

function QueryResultTable(props) {
  const {classes} = props;

  return (
      <Paper className={classes.paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell> Season </TableCell>
              <TableCell numeric> ERA </TableCell>
              <TableCell numeric> IP </TableCell>
              <TableCell numeric> H </TableCell>
              <TableCell numeric> R </TableCell>
              <TableCell numeric> ER </TableCell>
              <TableCell numeric> HR </TableCell>
              <TableCell numeric> BB </TableCell>
              <TableCell numeric> SO </TableCell>
              <TableCell numeric> W </TableCell>
              <TableCell numeric> L </TableCell>
              <TableCell numeric> PGS </TableCell>
              <TableCell numeric> WHIP </TableCell>
              <TableCell numeric> BAA </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => {
              return (
                  <TableRow key={n.id}>
                    <TableCell> {n.season} </TableCell>
                    <TableCell numeric> {n.era} </TableCell>
                    <TableCell numeric> {n.ip} </TableCell>
                    <TableCell numeric> {n.h} </TableCell>
                    <TableCell numeric> {n.r} </TableCell>
                    <TableCell numeric> {n.er} </TableCell>
                    <TableCell numeric> {n.hr} </TableCell>
                    <TableCell numeric> {n.bb} </TableCell>
                    <TableCell numeric> {n.so} </TableCell>
                    <TableCell numeric> {n.w} </TableCell>
                    <TableCell numeric> {n.l} </TableCell>
                    <TableCell numeric> {n.pgs} </TableCell>
                    <TableCell numeric> {n.whip} </TableCell>
                    <TableCell numeric> {n.baa} </TableCell>
                  </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
  );
}

QueryResultTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QueryResultTable);