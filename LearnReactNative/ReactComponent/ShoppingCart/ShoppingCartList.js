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
  TextInput,
  AsyncStorage,
  ScrollView
} from 'react-native';

import ShoppingCartItem from './ShoppingCartItem.js'
import ShoppingCartVC from './ShoppingCartVC.js'

//模拟服务器回来的数据
var model = [{
  id: '1',
  title: '商品1',
  desc: '1dozen',
  price: 99,
  url: 'http://vczero.github.io/ctrip/guo_1.jpg'
}, {
  id: '1',
  title: '商品2',
  desc: '1dozen',
  price: 59,
  url: 'http://vczero.github.io/ctrip/guo_2.jpg'
}, {
  id: '1',
  title: '商品3',
  desc: '1dozen',
  price: 91.5,
  url: 'http://vczero.github.io/ctrip/guo_3.jpg'
}, {
  id: '1',
  title: '商品4',
  desc: '1000g',
  price: 69,
  url: 'http://vczero.github.io/ctrip/guo_4.jpg'
}, {
  id: '1',
  title: '商品5',
  desc: '1dozen',
  price: 59.9,
  url: 'http://vczero.github.io/ctrip/guo_5.jpg'
}, {
  id: '1',
  title: '商品6',
  desc: '1dozen',
  price: 29.9,
  url: 'http://vczero.github.io/ctrip/guo_6.jpg'
}];

export default class ShoppingCartList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    var _that = this; //使用一个局部变量接收自己？？
    AsyncStorage.getAllKeys(function(err, keys) {
      if (err) {
        //TODO存储数据出错
        //给用户提示错误信息
        alert('图片加载错误!');
      }
      _that.setState({
        count: keys.length
      });
    });
  }

  render() {
    var list = [];
    for (var i in Model) {
      if (i % 2 === 0) {
        var row = (
          <View>
            <ShoppingCartItem
              url = {model[i].url}
              title = {model[i].title}
              press = {this._press.bind(this ,model[i])}
            >
            </ShoppingCartItem>
            <ShoppingCartItem
              url = {model[i + 1].url}
              title = {model[i + 1].title}
              press = {this._press.bind(this ,model[i + 1])}
            >
            </ShoppingCartItem>
          </View>
        );
        list.push(row);
      }
    }
    var count = this.state.count;
    var str = null;
    if (count) {
      str = ',共' + count + '件商品';
    }

    return (
      <ScrollView>
        {list}
        <Text onPress={this._shop.bind(this)}>去结算{str}</Text>
      </ScrollView>
    );

    _shop() {
      this.props.nav.push({
        component: ShoppingCartVC,
        title: '购物车'
      });
    }

    _press() {

    }
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