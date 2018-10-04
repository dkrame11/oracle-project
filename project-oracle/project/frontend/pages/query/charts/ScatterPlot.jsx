import React from 'react';
import {
  VictoryChart,
  VictoryGroup,
  VictoryPortal,
  VictoryScatter,
  VictoryStack,
  VictoryTheme,
  VictoryVoronoiContainer,
  VictoryTooltip
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
            Scatter Plot
          </Typography>
          <VictoryChart scale={{x: "time"}} theme={VictoryTheme.material}
                        width={500} height={500}
                        onZoomDomainChange={this.handleZoom.bind(this)}
                        containerComponent={<VictoryVoronoiContainer/>}
          >
            <VictoryStack colorScale="warm">
              <VictoryGroup
                  data={data}
              >
                <VictoryPortal>
                  <VictoryScatter
                      style={{data: {fill: "teal"}}}
                      labels={(d) => d.x + '\n' + d.y}
                      labelComponent={<VictoryTooltip/>}
                  />
                </VictoryPortal>
              </VictoryGroup>
            </VictoryStack>
          </VictoryChart>
        </Paper>
    );
  }
}

export default withStyles(styles, {withTheme: true})(LineChart);