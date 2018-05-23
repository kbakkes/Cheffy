import React, { Component } from 'react';
import { Image } from 'react-native';

export default class PlateComponent extends Component {
    render() {
        return (
            <Image source={require('./../images/plate.png')} style={{width: 300, height: 300, justifyContent: 'center'}}/>
        );
    }
}