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
  TouchableHighlight
} from 'react-native';

export default class TouchableHighlightDemoVC extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.contain}>
        <TouchableHighlight
          onPress={this._onClick.bind(this)}
          underlayColor='#E1F6FF'
        >
          <Text style={styles.btn}>点击高亮</Text>
        </TouchableHighlight>
      </View>
    );
  }

  _onClick() {
    alert("onClick");
  }
}

var styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  contain: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
    width: 100,
    borderWidth: 1,
    borderColor: 'red',
  },
  btn: {
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 80,
    borderWidth: 1,
    borderColor: 'blue',
  }
});