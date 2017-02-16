/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import HourHand from './hourHand'
import MinuteHand from './minuteHand'
import SecondHand from './secondHand'

var width = Dimensions.get('window').width

export default class Clock extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.clock}>
          <HourHand></HourHand>
          <MinuteHand></MinuteHand>
          <SecondHand></SecondHand>
          <View style={styles.center}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  clock: {
    position: 'absolute',
    top: 55,
    left: 80,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'white',
    borderWidth: 10,
    borderColor: '#696969'
  },
  center: {
    position: 'relative',
    width: 10,
    top: -912,
    left: 85,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FF6347',
  },
  minuteHand: {
    position: 'absolute',
    top: 20,
  },
  hourHand: {
    position: 'relative',
  },
   secondHand: {
    left: -28,
    top: 7,
    width: 85,
    height: 3,
    backgroundColor: 'red',
   },
});

module.exports = Clock