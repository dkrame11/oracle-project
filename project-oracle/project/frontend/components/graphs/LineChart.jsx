import React from 'react';
import PropTypes from 'prop-types';
import {
  Crosshair, FlexibleXYPlot,
  HorizontalGridLines,
  LineSeries,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis
} from 'react-vis';
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
  [
    {x: 1, y: 10},
    {x: 2, y: 7},
    {x: 3, y: 15}
  ],
  [
    {x: 1, y: 20},
    {x: 2, y: 5},
    {x: 3, y: 15}
  ]
];

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crosshairValues: []
    };

    this._onMouseLeave = this._onMouseLeave.bind(this);
    this._onNearestX = this._onNearestX.bind(this);
  }

  /**
   * Event handler for onNearestX.
   * @param {Object} value Selected value.
   * @param {index} index Index of the value in the data array.
   * @private
   */
  _onNearestX(value, {index}) {
    this.setState({crosshairValues: data.map(d => d[index])});
  }

  /**
   * Event handler for onMouseLeave.
   * @private
   */
  _onMouseLeave() {
    this.setState({crosshairValues: []});
  }

  render() {
    const {classes, theme} = this.props;
    return (
        <Paper className={classes.paper}>
          <Typography className={classes.title}>Line Chart</Typography>
          <FlexibleXYPlot
              onMouseLeave={this._onMouseLeave}
              width={300}
              height={300}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <LineSeries
                onNearestX={this._onNearestX}
                data={data[0]}/>
            <LineSeries
                data={data[1]}/>
            <Crosshair values={this.state.crosshairValues} className={'line-chart'}/>
          </FlexibleXYPlot>
        </Paper>
    );
  }
}

LineChart.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(LineChart);