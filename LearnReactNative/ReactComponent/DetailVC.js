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
  ScrollView
} from 'react-native';

export default class DetailVC extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <Text>详情页</Text>
        <Text>这是一个详情页，真的是一个详情页</Text>
      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
  flex: {
    flex: 1
  }
});