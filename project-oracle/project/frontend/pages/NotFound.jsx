import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "material-ui/styles/index";

const styles = {};

class NotFound extends React.Component {
  render() {
    return (
        <h1>404 Page Not Found</h1>
    );
  }
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(NotFound);