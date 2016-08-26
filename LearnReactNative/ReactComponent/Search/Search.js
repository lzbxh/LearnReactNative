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
  TextInput
} from 'react-native';

export default class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.flex ,styles.flexDirection ,styles.topStatus]}>
        <View style={styles.flex}>
          <TextInput style={styles.input} returnKeyType="search"/>
        </View>
        <View style={styles.btn}>
          <Text style={styles.search}>搜索</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  flexDirection: {
    flexDirection: 'row'
  },
  topStatus: {
    marginTop: 70
  },
  input: {
    height: 45,
    borderWidth: 1,
    marginLeft: 5,
    paddingLeft: 5,
    borderColor: '#ccc',
    borderRadius: 4
  },
  btn: {
    width: 55,
    marginLeft: -5,
    marginRight: 5,
    backgroundColor: '#23BEFF',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  search: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  }
});