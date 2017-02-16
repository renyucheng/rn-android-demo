/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import Svg,{
  G,
  Line,
}from 'react-native-svg';
import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Dimensions
} from 'react-native';

var width = Dimensions.get('window').width

export default class MinuteHand extends Component {
constructor (props) {
  super(props)
  this.state = {
  	time: 0
  }
}

componentDidMount() {
	let date = new Date()
	let minute = date.getMinutes()
	this.setState({
		time: minute * 6
	})
  this.timePlus()
}

timePlus() {
	var that = this
	setInterval(function(){
		let date = new Date()
		let minute = date.getMinutes()
		that.setState({
		time: minute * 6
	})
	},10000)
}

	render() {
		return (
			<View style={styles.minuteHand}>
						<Svg 
					  height="400"
					  width="400"
					>
					  <G
				      rotate={this.state.time}
				      origin="95, 95"
					  >
				      <Line
			          x1="95"
			          y1="20"
			          x2="95"
			          y2="103"
			          stroke="black"
		            strokeWidth="3"	
				      />
					  </G>
					</Svg>
			</View>
		);
	}
}	

const styles = StyleSheet.create({
	minuteHand: {
		width: 400,
		height: 400,
		backgroundColor: 'transparent',
		top: -200,
		left: -5,
	}
});

module.exports = MinuteHand