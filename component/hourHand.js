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

export default class HourHand extends Component {
constructor (props) {
  super(props)
  this.state = {
  	time: 0
  }
}

componentDidMount() {
	let date = new Date()
	let hour = date.getHours()
	let minute = date.getMinutes()
	this.setState({
		time: (hour + minute / 60 ) * 30
	})
  this.timePlus()
}

timePlus() {
	let that = this
	setInterval(function(){
		let date = new Date()
		let hour = date.getHours()
		let minute = date.getMinutes()
		that.setState({
		time: (hour + minute / 60 ) * 30
	})
	},120000)
}

	render() {
		return (
			<View style={styles.hourHand}>
						<Svg 
					  height="200"
					  width="200"
					>
					  <G
				      rotate={this.state.time}
				      origin="100, 100"
					  >
				      <Line
			          x1="100"
			          y1="110"
			          x2="100"
			          y2="45"
			          stroke="black"
		            strokeWidth="5"	
				      />
					  </G>
					</Svg>
			</View>
		);
	}
}	

const styles = StyleSheet.create({
	hourHand: {
		width: 200,
		height: 200,
		left: -10,
		top: -10,
		backgroundColor: 'transparent',
	}
});

module.exports = HourHand