/* global navigator */
/* eslint no-console: 0
 */
import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MapView from 'react-native-maps';

import { ActionCreators } from '../actions';
import { styles } from '../styles';

class Screen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
        <Text>My Profile Screen</Text>
      </View>
    );
  }
}

Screen.propTypes = {
  navigateMapPost: React.PropTypes.func.isRequired,
  setDraftPostCoordinates: React.PropTypes.func.isRequired,
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Screen);
