import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import {ListItem} from "material-ui";
import BillboardChart from "react-billboardjs";
import RecordTable from "./RecordTable";

const styles = theme => ({
  searchBar: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    width: 'calc(90%)',
  },
  card: {
    minWidth: 'calc(80%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  chart: {
    padding: theme.spacing.unit * 3,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
  action: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 3,
    color: theme.palette.text.secondary,
    display: 'flex',
  },
  verticalContainer: {
    display: 'flex',
    webkitAlignItems: 'center',
    alignItems: 'center',
    webkitJustifyContent: 'center',
    justifyContent: 'center',
  }
});

const timeserisAxis = {
  "x": {
    "type": "timeseries",
    "tick": {
      format: function (d) {
        let month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2) {
          month = '0' + month;
        }
        if (day.length < 2) {
          day = '0' + day;
        }
        return [year, month, day].join('-');
      },
      "count": 6
    },
  }
};

const fileDownload = require('js-file-download');

class Records extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    const {classes, theme, data, plot} = this.props;
    if (!data) {
      return <div>{''}</div>
    }
    console.log("Records");
    console.log(plot);
    return (
        <ListItem>
          <Card className={classes.card} elevation={4}>
            <CardContent>
              <Typography
                  className={classes.title}>Q: {this.props.query}</Typography>
              <Typography variant="headline" component="h2">
                {'Response'}
              </Typography>
              <Typography className={classes.pos}>
                {this.props.headline}
              </Typography>
              <RecordTable data={data}/>
              <div style={{paddingTop: 30}}>
                <BillboardChart data={plot} axis={timeserisAxis}/>
              </div>
            </CardContent>
            <CardActions>
              <Button size="small"
                      className={classes.action}
                      onClick={() => fileDownload(JSON.stringify(data),
                          'data.csv')}
              >
                Download
                CSV</Button>
            </CardActions>
          </Card>
        </ListItem>
    );
  }
}

Records.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles, {withTheme: true})(Records);