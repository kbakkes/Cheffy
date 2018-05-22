import React, { Component } from 'react';
import {Text, View } from 'react-native';

export default class Faaks extends Component {
    render() {
        return (
            <View>
            <Text>Faaks {this.props.name}!</Text>
            </View>
        );
    }
}
