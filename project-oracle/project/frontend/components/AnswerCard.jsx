import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import {ListItem} from "material-ui";
import QueryResultTable from "./QueryResultTable";

const styles = theme => ({
  searchBar: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    width: 'calc(90%)',
  },
  card: {
    minWidth: 'calc(80%)',
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
});

class AnswerCard extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    const {classes, theme} = this.props;
    // console.log(this.props.data);
    return (
        <ListItem>
          <Card className={classes.card} elevation={4}>
            <CardContent>
              <Typography
                  className={classes.title}>Q: {this.props.query}</Typography>
              <Typography variant="headline" component="h2">
                {this.props.data}
              </Typography>
              <Typography className={classes.pos}>
                {this.props.headline}
              </Typography>
              <QueryResultTable/>
            </CardContent>
            <CardActions>
              <Button size="small" className={classes.action}>Download
                CSV</Button>
            </CardActions>
          </Card>
        </ListItem>
    );
  }
}

AnswerCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(AnswerCard);