import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import List from 'material-ui/List';
import ListItem from "material-ui/List/ListItem";
import ListItemIcon from "material-ui/List/ListItemIcon";
import ListItemText from "material-ui/List/ListItemText";
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import Link from "react-router-dom/Link";

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    width: 60,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  link: {
    textDecoration: 'none',
  },
});

class MainDrawer extends React.Component {
  onDrawerClose = () => {
    this.props.onHandleDrawerClose();
  };

  render() {
    const {classes, theme, open} = this.props;
    return (
        <Drawer
            variant="permanent"
            classes={{
              paper: classNames(
                  classes.drawerPaper, !open
                  && classes.drawerPaperClose),
            }}
            open={open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.onDrawerClose.bind(this)}>
              <ChevronLeftIcon/>
            </IconButton>
          </div>
          <Divider/>
          {/*<DrawerMenu/>*/}
          <List>
            <Link to='/' className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon/>
                </ListItemIcon>
                <ListItemText primary="Home"/>
              </ListItem>
            </Link>
            <Link to='/query' className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <StarIcon/>
                </ListItemIcon>
                <ListItemText primary="Query"/>
              </ListItem>
            </Link>
            <Link to='/chart' className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <SendIcon/>
                </ListItemIcon>
                <ListItemText primary="Chart"/>
              </ListItem>
            </Link>
            <Link to='/articles' className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <DraftsIcon/>
                </ListItemIcon>
                <ListItemText primary="Articles"/>
              </ListItem>
            </Link>
          </List>
        </Drawer>
    );
  }
}

MainDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(MainDrawer);