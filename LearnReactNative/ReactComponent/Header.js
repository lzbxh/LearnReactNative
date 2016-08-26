'use strict';

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  Text,
  StyleSheet,
  View,
  PixelRatio
} from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.flex}>
        <Text style={styles.font}>
          <Text style={styles.font_1}>网易</Text>
          <Text style={styles.font_2}>新闻</Text>
          <Text>有态度。</Text>
        </Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  flex: {
    marginTop: 25,
    height: 50,
    borderBottomWidth: 3 / PixelRatio.get(),
    borderBottomColor: '#EF2D36',
    alignItems: 'center' /*使Text组件居中*/
  },
  font: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center' /*使文字在Text组件中居中*/
  },
  font_1: {
    color: '#CD1D1C'
  },
  font_2: {
    color: '#FFF',
    backgroundColor: '#CD1D1C'
  }
});