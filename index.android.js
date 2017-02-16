/*
      _ooOoo_
     o8888888o
     88" . "88
     (| - - |)
     O\  _  /O
  _ _/'_ _ _'\_ _ _ 
*/
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import Clock from './component/clock'

var width = Dimensions.get('window').width

export default class Shengchen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Clock>
        </Clock>
        <View style={styles.duration}>
          <Text style={styles.age}>你24岁了</Text>
          <Text style={styles.existed}>在这个世界上，你已经存在了</Text>
          <View style={styles.year}>
            <Text>24</Text>
            <Text>年</Text>
          </View>
          <View style={styles.month}>
            <Text>297</Text>
            <Text>月</Text>
          </View>
          <View style={styles.week}>
            <Text>1271</Text>
            <Text>周</Text>
          </View>
          <View style={styles.day}>
            <Text>9042</Text>
            <Text>天</Text>
          </View>
          <View style={styles.hour}>
            <Text>217028</Text>
            <Text>小时</Text>
          </View>
          <View style={styles.minute}>
            <Text>13021684</Text>
            <Text>分钟</Text>
          </View>
        </View>
        <View style={styles.deathClock}>
          <Text>死之钟</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
   age: {
    top: -30,
    left: 90,
    width: 300,
    height: 40,
    fontSize: 26,
   },
   duration: {
    position: 'absolute',
    left: 140,
    top: 470,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
   },
   existed: {
    marginTop: -30,
    marginLeft: -80,
    float: 'left',
    width: 200,
    height: 100,
   },
   year: {
    top: -75,
    left: -100,
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 50,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#A9A9A9',
    borderRightWidth: 0,
    borderBottomWidth: 0,
   },
   month: {
    top: -125,
    left: -10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 50,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#A9A9A9',
    borderRightWidth: 0,
    borderBottomWidth: 0,
   },
   week: {
    top: -175,
    left: 80,
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 50,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#A9A9A9',
    borderBottomWidth: 0,
   },
   day: {
    top: -175,
    left: -100,
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 50,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#A9A9A9',
    borderRightWidth: 0,
   },
   hour: {
    top: -225,
    left: -10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 50,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#A9A9A9',
    borderRightWidth: 0,
   },
   minute: {
    top: -275,
    left: 80,
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 50,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#A9A9A9',
   },
   deathClock: {
    position: 'absolute',
    top: 510,
    left: 120,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#A9A9A9', 
   }
});

AppRegistry.registerComponent('Shengchen', () => Shengchen);
