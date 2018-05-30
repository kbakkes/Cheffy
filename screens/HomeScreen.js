import React from 'react';
import {Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {


    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Profile"
                    onPress={() => this.props.navigation.navigate('Profile',{title: 'My Profile'})}
                />
                <Button
                    title="My plate"
                    onPress={() => this.props.navigation.navigate('Plate',{title: 'My Plate'})}
                />
            </View>
        )
    }
}