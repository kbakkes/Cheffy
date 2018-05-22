import React from 'react';
import {Text, View, Button } from 'react-native';
import Faaks from "../Faaks";
import Meme from "../Meme";






export default class ProfileScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
        headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
        headerStyle:{
            backgroundColor:'white',
        },
    });


    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Faaks name={'Poep eten'}/>
                <Meme/>
                <Text>My Profile</Text>
                <Button
                    title="Go to Profile again"
                    onPress={() => this.props.navigation.navigate('Profile')}

                />
                <Button title="Console log" onPress={()=>{console.log(this.props.navigation);}}/>
            </View>
        )
    }
}


