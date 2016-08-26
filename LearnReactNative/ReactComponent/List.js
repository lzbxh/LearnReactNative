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

import DetailVC from './DetailVC.js'

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.list_item}>
        <Text onPress={this._jumpDetailVC.bind(this)}style={styles.list_item_font}>{this.props.title}</Text>
      </View>
    )
  }

  _jumpDetailVC() {
    this.props.nav.push({
      component: DetailVC,
      title: '详情',
    })
  }
}

var styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  list_item: {
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'center'
  },
  list_item_font: {
    fontSize: 16
  }
});