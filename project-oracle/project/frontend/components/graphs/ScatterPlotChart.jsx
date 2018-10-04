import React from 'react';
import PropTypes from 'prop-types';
import {HorizontalGridLines, MarkSeries, XAxis, XYPlot, YAxis} from 'react-vis';
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
  {x: 1, y: 4},
  {x: 5, y: 4},
  {x: 2, y: 3},
  {x: 7, y: 1},
  {x: 1, y: 5},
  {x: 2, y: 4},
  {x: 3, y: 9},
];

class ScatterPlotChart extends React.Component {
  constructor() {
    super();
    this.state = {index: null};
    this._onNearestX = this._onNearestX.bind(this);
  }

  /**
   * Event handler for onNearestX.
   * @param {Object} value Selected value.
   * @param {index} index Index of the value in the data array.
   * @private
   */
  _onNearestX(datapoint, {index}) {
    this.setState({index});
  }

  render() {
    const {index} = this.state;
    const {classes, theme} = this.props;
    const dat = data.map((d, i) => ({...d, color: i === index ? 1 : 0}));
    return (
        <Paper className={classes.paper}>
          <Typography className={classes.title}>Scatter Plot</Typography>
          <XYPlot height={200} width={350}>
            <HorizontalGridLines/>
            <MarkSeries
                data={dat}
                stroke="white"
                onNearestXY={this._onNearestX}
            />
            <XAxis/>
            <YAxis/>
          </XYPlot>
        </Paper>
    );
  }
}

ScatterPlotChart.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(ScatterPlotChart);