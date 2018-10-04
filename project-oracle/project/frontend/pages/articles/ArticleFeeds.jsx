import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "material-ui/styles/index";
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from 'material-ui-icons/Inbox';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  filterBar: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 'calc(80%)',
  },
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class ArticleFeeds extends React.Component {
  render() {
    const {classes, theme} = this.props;
    let articles = [
      "Article 1",
      "Article 2",
      "Article 3",
      "Article 4",
      "Article 5",
    ];
    return (
        <Grid item xs={12} md={4} lg={4}>
          <TextField
              id="filter"
              label="Filter Articles"
              type="filter"
              className={classes.filterBar}
              margin="normal"
          />
          <Paper className={classes.paper} elevation={4}>
            <Typography variant="headline" component="h3">
              Article Feeds
            </Typography>
            <Typography component="p">
              List of recent articles based on search keywords.
            </Typography>
            <div className={classes.root}>
              <List component="nav">
                <Divider/>
                {articles.map((title, i) =>
                    <ListItem button key={i}>
                      <ListItemIcon>
                        <InboxIcon/>
                      </ListItemIcon>
                      <ListItemText primary={title}/>
                    </ListItem>)}
              </List>
              <Divider/>
            </div>
          </Paper>
        </Grid>
    );
  }
}

ArticleFeeds.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(ArticleFeeds);