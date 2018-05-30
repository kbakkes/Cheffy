import React from 'react';
import {Text, View, Button } from 'react-native';
import RecipeFetcher from "../utils/RecipeFetcher";

export default class ResultScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
        headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
        headerStyle:{
            backgroundColor:'white',
        },
    });




render(){
    const { navigation }  = this.props;
    const ingredients = navigation.getParam('ingredients', 'hotwings');
    return(
            <View>
                    <RecipeFetcher ingredients={ingredients}/>
            </View>
        )
    }
}