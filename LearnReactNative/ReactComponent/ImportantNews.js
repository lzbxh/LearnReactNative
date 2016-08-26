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

import SearchVC from './Search/SearchVC.js'
import TouchableHighlightDemoVC from './TouchableHighlight/TouchableHighlightDemoVC.js'
import ImageVC from './ImageDemo/ImageVC.js'

export default class ImportantNews extends Component {
  constructor(props) {
    super(props);
  }

  _show(title) {
    if (title === '1.SearchDemo') {
      this.props.nav.push({
        component: SearchVC,
        title: title,
      });
    } else if (title === '2.TouchableHighlightDemo') {
      this.props.nav.push({
        component: TouchableHighlightDemoVC,
        title: title,
      });
    } else if (title === '3.ImageDemo') {
      this.props.nav.push({
        component: ImageVC,
        title: title,
      });
    } else {

    }
  }

  render() {
    var news = [];
    for (var i in this.props.news) {
      var text = (
        <Text
          onPress={this._show.bind(this ,this.props.news[i])}
          numberOfLines={2}
          style={styles.news_item}
        >
        {this.props.news[i]}
        </Text>
      );
      news.push(text);
    }
    return (
      <View style={styles.flex}>
        <Text style={styles.newsTitle}>今日要闻</Text>
        {news}
      </View>
    )
  }
}

var styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  listItem: {
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'center'
  },
  listItemFont: {
    fontSize: 16
  },
  newsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#CD1D1C',
    marginLeft: 10,
    marginTop: 15
  },
  newsItem: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
    lineHeight: 20
  }
});