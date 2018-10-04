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

class RecordTable extends React.Component {
    constructor() {
        super();
        this.state = {
            keys: [],
            rows: [],
        };

    }

    getTableKeys(keys) {
        const uniqueKey = JSON.stringify(keys);
        let header = [<TableCell key={'header no'}> {'no.'}</TableCell>];
        keys.map((key, idx) => {
            header.push(<TableCell key={uniqueKey + idx.toString()}> {key}</TableCell>);
        });
        return header;
    }

    getTableRows(data) {
        const keys = Object.keys(data[0]);
        let num = 0;
        const uniqueKey = JSON.stringify(data);
        return (
            data.map((row, idx) => {
                return (
                    <TableRow key={uniqueKey + idx.toString()}>
                        <TableCell key={uniqueKey + 'no'}> {num++} </TableCell>
                        {keys.map((key) => {
                            return (<TableCell key={uniqueKey + row[key]}> {row[key]} </TableCell>)
                        })}
                    </TableRow>
                )
            })
        )
    }

    render() {
        const {classes, data} = this.props;
        if (!data) {
            return null
        }

        return (
            <Paper className={classes.paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            {this.getTableKeys(Object.keys(data[0]))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.getTableRows(data)}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

RecordTable.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(RecordTable);