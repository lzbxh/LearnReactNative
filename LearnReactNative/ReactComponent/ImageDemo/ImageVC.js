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
  Image,
  TouchableOpacity
} from 'react-native';

var imgs = [
  'http://www.ituring.com.cn/bookcover/1442.796.jpg',
  'http://www.ituring.com.cn/bookcover/1668.553.jpg',
  'http://www.ituring.com.cn/bookcover/1521.260.jpg'
];

export default class ImageVC extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    imgs: imgs,
    count: 0
  };

  //下一张
  _onClickNext() {
    var count = this.state.count || 0;
    count++;
    if (count < imgs.length) {
      this.setState({
        count: count
      });
    }
  }

  //上一张
  _onClickPreview() {
    var count = this.state.count || 0;
    count--;
    if (count >= 0) {
      this.setState({
        count: count
      });
    }
  }

  render() {
    return (
      <View style={styles.flex}>
        
        <View style={styles.image}>
          <Image style={styles.img}
            source={ {uri:this.state.imgs[this.state.count]} }
            resizeMode='contain'
          >
          </Image>
        </View>

        <View style={styles.btns}>
          <TouchableOpacity onPress={this._onClickPreview.bind(this)}>
            <Text style={styles.btn}>preview</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this._onClickNext.bind(this)}>
            <Text style={styles.btn}>next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    marginTop: 70,
    borderWidth: 1,
    width: 300,
    height: 200,
    borderRadius: 5,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    height: 150,
    width: 200
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  btn: {
    width: 60,
    height: 30,
    borderColor: '#0089FF',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginRight: 20,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});