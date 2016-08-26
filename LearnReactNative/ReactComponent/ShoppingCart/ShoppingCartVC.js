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
  NavigatorIOS,
} from 'react-native';

export default class ShoppingCartVC extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.flex}>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  flex: {
    flex: 1
  }
});