import React from 'react';
import {
  VictoryAxis,
  VictoryBrushContainer,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryZoomContainer
} from 'victory';
import {withStyles} from "material-ui/styles/index";
import {Paper, Typography} from "material-ui";

const styles = theme => ({
  title: {
    marginBottom: 16,
    fontSize: 14,
    textAlign: 'center',
  },
  paper: {
    minWidth: `calc(40%)`,
    minHeight: `calc(20%)`,
    margin: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 5,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'inline-block',
  },
});

class LineChart extends React.Component {
  constructor() {
    super();
    this.state = {
      zoomDomain: {x: [new Date(1990, 1, 1), new Date(2009, 1, 1)]}
    };
  }

  handleZoom(domain) {
    this.setState({zoomDomain: domain});
  }

  render() {
    const {classes, data} = this.props;
    return (
        <Paper className={classes.paper}>
          <Typography variant="display1" align="center">
            Line Chart
          </Typography>
          <VictoryChart width={800} height={500}
                        theme={VictoryTheme.material}
                        scale={{x: "time"}}
                        containerComponent={
                          <VictoryZoomContainer
                              zoomDimension="x"
                              zoomDomain={this.state.zoomDomain}
                              onZoomDomainChange={this.handleZoom.bind(this)}
                          />
                        }
          >
            <VictoryLine
                style={{
                  data: {stroke: "tomato"}
                }}
                data={data}
                x="x"
                y="y"
            />

          </VictoryChart>
          <VictoryChart
              padding={{top: 0, left: 50, right: 50, bottom: 30}}
              width={800} height={150} scale={{x: "time"}}
              containerComponent={
                <VictoryBrushContainer
                    brushDimension="x"
                    brushDomain={this.state.zoomDomain}
                    onBrushDomainChange={this.handleZoom.bind(this)}
                />
              }
          >
            <VictoryAxis
                tickFormat={(x) => new Date(x).getFullYear()}
            />
            <VictoryLine
                style={{
                  data: {stroke: "tomato"}
                }}
                data={data}
                x="x"
                y="y"
            />
          </VictoryChart>
        </Paper>
    );
  }
}

export default withStyles(styles, {withTheme: true})(LineChart);