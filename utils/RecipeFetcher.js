import React, { Component } from 'react';
import {Text, View } from 'react-native';

const id = '47d5b17b';
const key = '9ae07c47a0474c4c05fac5cd08278edd';

export default class RecipeFetcher extends Component {
    constructor(props){
        super();
        this.state = {
            isLoading: true,
            recipes: []
        }
    }

    componentWillMount(){
        fetch('http://api.yummly.com/v1/api/recipes?_app_id='+id+'&_app_key='+key+'&q=cheese')
            .then(res => res.json())
            .then(recipes => {
                this.setState({
                    isLoading: false,
                    recipes
                });
            });
    }



    render() {
        console.log('log this state in render', this.state);
        return (
            <View>
                <Text>ja</Text>
            </View>
        );
    }
}