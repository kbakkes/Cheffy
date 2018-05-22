import React, { Component } from 'react';
import {Text, View } from 'react-native';
import api from './utils/api';

export default class Pokelist extends Component {
    constructor(props){
        super();
        this.state = {
            isLoading: true,
            person: []
        }
    }

    componentWillMount(){
     fetch('https://swapi.co/api/people/16')
         .then(res => res.json())
         .then(person => {
             this.setState({
                 isLoading: false,
                 person
             });
         });
    }



    render() {
        console.log('log this state in render', this.state);
        return (
            <View>
                <Text>Faaks {this.state.person.name}, jouw gender is {this.state.person.gender}</Text>
            </View>
        );
    }
}