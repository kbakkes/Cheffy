import React from 'react';
import {Text, View, Button } from 'react-native';
import Faaks from "../Faaks";
import RecipeFetcher from "../utils/RecipeFetcher";

export default class HomeScreen extends React.Component {


    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Faaks name={'Karim'}/>
                <RecipeFetcher/>
                <Button
                    title="Profile"
                    onPress={() => this.props.navigation.navigate('Profile',{title: 'Mijn profiel'})}
                />
                <Button
                    title="My plate"
                    onPress={() => this.props.navigation.navigate('Plate',{title: 'My Plate'})}
                />
            </View>
        )
    }
}