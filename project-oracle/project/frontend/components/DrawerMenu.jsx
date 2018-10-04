import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import List from 'material-ui/List';
import { mailFolderListItems } from '../data/tileData';

const styles = theme => ({
});

class DrawerMenu extends React.Component {
  render() {
    const {classes, theme} = this.props;
    return (
          <List>{mailFolderListItems}</List>
    );
  }
}

DrawerMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(DrawerMenu);