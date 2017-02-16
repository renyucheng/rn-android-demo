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

export default class SecondHand extends Component {
constructor (props) {
  super(props)
  this.state = {
  	time: 0
  }
}

componentDidMount() {
	let date = new Date()
	let seconde = date.getSeconds()
	this.setState({
		time: seconde * 6
	})
  this.timePlus()
}

timePlus() {
	var that = this
	setInterval(function(){
		let date = new Date()
		let seconde = date.getSeconds()
		that.setState({
		// time: that.state.time + 0.6
		time: seconde * 6
	})
	},500)
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
				      origin="98, 290"
					  >
				      <Line
			          x1="98"
			          y1="204"
			          x2="98"
			          y2="305"
			          stroke="#ee735c"
		            strokeWidth="2"	
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
		top: -797,
		left: -8,
	}
});

module.exports = SecondHand