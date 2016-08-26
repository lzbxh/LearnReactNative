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

import Search from './Search.js'

export default class SearchVC extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Search></Search>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  flex: {
    flex: 1
  }
});