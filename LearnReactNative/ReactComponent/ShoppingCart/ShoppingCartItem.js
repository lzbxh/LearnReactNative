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
  TouchableOpacity
} from 'react-native';

export default class ShoppingCartItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.flex}>
        <TouchableOpacity onPress={this.props.press}>   /*点击事件由父组件传递*/
          <Image
            resizeMode='contain'
            source={{uri:this.props.url}}
          >
          <Text numberOfLines={1}>{this.props.title}</Text>
          </Image>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  flex: {
    flex: 1
  }
});