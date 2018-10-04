import React from 'react';
import {VictoryChart, VictoryLine, VictoryScatter} from 'victory';
import {withStyles} from "material-ui/styles/index";
import {Paper, Typography} from "material-ui";

const styles = theme => ({
  title: {
    marginBottom: 16,
    fontSize: 14,
    textAlign: 'center',
  },
  paper: {
    minWidth: `calc(80%)`,
    minHeight: `calc(20%)`,
    margin: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 5,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'inline-block',
  },
});

const cartesianInterpolations = [
  "basis",
  "bundle",
  "cardinal",
  "catmullRom",
  "linear",
  "monotoneX",
  "monotoneY",
  "natural",
  "step",
  "stepAfter",
  "stepBefore"
];

const polarInterpolations = [
  "basis",
  "cardinal",
  "catmullRom",
  "linear"
];

const InterpolationSelect = ({currentValue, values, onChange}) => (
    <select onChange={onChange} value={currentValue} style={{width: 75}}>
      {values.map(
          (value) => <option value={value} key={value}>{value}</option>
      )}
    </select>
);

class InterpolationChart extends React.Component {
  constructor() {
    super();
    this.state = {
      interpolation: "linear",
      polar: false
    };
  }

  render() {
    const {classes, data} = this.props;
    return (
        <Paper className={classes.paper}>
          <Typography variant="display1" align="center">
            Interpolation Chart
          </Typography>

          <InterpolationSelect
              currentValue={this.state.interpolation}
              values={this.state.polar ? polarInterpolations
                  : cartesianInterpolations}
              onChange={(event) => this.setState(
                  {interpolation: event.target.value})}
          />
          <input
              type="checkbox"
              id="polar"
              value={this.state.polar}
              onChange={
                (event) => this.setState({
                  polar: event.target.checked,
                  interpolation: "linear"
                })
              }
              style={{marginLeft: 25, marginRight: 5}}
          />
          <label htmlFor="polar">polar</label>
          <VictoryChart scale={{x: "time"}} polar={this.state.polar} width={800} height={390}>
            <VictoryLine
                interpolation={this.state.interpolation} data={data}
                style={{data: {stroke: "#c43a31"}}}
            />
            <VictoryScatter data={data}
                            size={5}
                            style={{data: {fill: "#c43a31"}}}
            />
          </VictoryChart>
        </Paper>
    );
  }
}

export default withStyles(styles, {withTheme: true})(InterpolationChart);