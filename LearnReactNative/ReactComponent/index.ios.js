'use strict';

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  Text,
  StyleSheet,
  View,
  PixelRatio,
  NavigatorIOS
} from 'react-native';

import Home from './Home.js'

class HuoBan extends Component {
  constructor(props) {
    super(props);
  }
}

var NV = React.createClass({
  render: function() {
    return ( <NavigatorIOS style = {
        {
          flex: 1
        }
      }
      initialRoute = {
        {
        component: Home,
          title: '主页',
          passProps: this.props
        }
      }
      />
    );
  }
});

var styles = StyleSheet.create({
  flex: {
    flex: 1
  }
});

AppRegistry.registerComponent('HuoBan', () => NV);