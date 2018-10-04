import React from 'react';
import PropTypes from 'prop-types';
import {HorizontalGridLines, VerticalBarSeries, XAxis, XYPlot, YAxis} from 'react-vis';
import {withStyles} from "material-ui/styles/index";
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  title: {
    marginBottom: 16,
    fontSize: 14,
    textAlign: 'center',
  },
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'inline-block',
  },
});

const data = [
  {x: 0, y: 8},
  {x: 1, y: 5},
  {x: 2, y: 4},
  {x: 3, y: 9},
];

class VerticalBarChart extends React.Component {
  render() {
    const {classes, theme} = this.props;
    return (
        <Paper className={classes.paper}>
          <Typography className={classes.title}>Bar Graph</Typography>
          <XYPlot height={200} width={350}>
            <HorizontalGridLines/>
            <VerticalBarSeries data={data} animation/>
            <XAxis/>
            <YAxis/>
          </XYPlot>
        </Paper>
    );
  }
}

VerticalBarChart.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(VerticalBarChart);