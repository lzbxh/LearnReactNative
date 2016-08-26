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
  TabBarIOS
} from 'react-native';

import Header from './Header.js';
import List from './List.js';
import ImportantNews from './ImportantNews.js'

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TabBarIOS style={styles.flex}>
          <TabBarIOS.Item
            title="消息"
            icon={ require('./message.png') }
            selected={1 === 1}
          >
            <View style={styles.flex ,styles.marginTop}>
            <Header></Header>
            <List nav={this.props.navigator}  title="1.新闻1新闻1新闻1新闻1新闻1"></List>
            <List nav={this.props.navigator}  title="2.新闻2新闻2新闻2新闻2新闻2"></List>
            <List nav={this.props.navigator}  title="3.新闻3新闻3新闻3新闻3新闻3"></List>
            <List nav={this.props.navigator}  title="4.新闻4新闻4新闻4新闻4新闻4"></List>
            <List nav={this.props.navigator}  title="5.新闻5新闻5新闻5新闻5新闻5"></List>
            <List nav={this.props.navigator}  title="6.新闻6新闻6新闻6新闻6新闻6"></List>
            <ImportantNews nav={this.props.navigator} news={[
      '1.SearchDemo',
      '2.TouchableHighlightDemo',
      '3.ImageDemo',
      '4.今日要闻今日要闻今日要闻今日要闻今日要闻',
      '5.今日要闻今日要闻今日要闻今日要闻今日要闻',
      '6.今日要闻今日要闻今日要闻今日要闻今日要闻',
      '7.今日要闻今日要闻今日要闻今日要闻今日要闻',
      '8.今日要闻今日要闻今日要闻今日要闻今日要闻'
            ]
            } >
            </ImportantNews>
            </View>
          </TabBarIOS.Item>

          <TabBarIOS.Item
            title="联系人"
            icon={ require('./phone.png') }
          >
          </TabBarIOS.Item>

          <TabBarIOS.Item
            title="动态"
            icon={ require('./star.png') }
          >
          </TabBarIOS.Item>
        </TabBarIOS>
    )
  }
}

var styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  marginTop: {
    marginTop: 64,
  }
});