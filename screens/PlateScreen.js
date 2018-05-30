import React from 'react';
import {Text, View, Button, Image, ScrollView } from 'react-native';
import PlateComponent from "../components/PlateComponent";


export default class PlateScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
        headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
        headerStyle:{
            backgroundColor:'white',
        },
    });

    stringifyIngredients(){
        return 'salmon';
    }


    render(){
        console.log(this.stringifyIngredients());
        return(
            <View>
                <ScrollView
                    horizontal={true} >
                    <Image source={require('./../images/beef.png')} style={{width: 100, height: 100}}/>
                    <Image source={require('./../images/patty.png')} style={{width: 100, height: 100}}/>
                    <Image source={require('./../images/sausage.png')} style={{width: 100, height: 100}}/>
                </ScrollView>
                <PlateComponent  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} />
                <Button
                    title="Search Recipes"
                    onPress={() => this.props.navigation.navigate('Result', {
                            title: 'Results',
                            ingredients: this.stringifyIngredients(),
                        }
                        )}
                />
            </View>
        )
    }
}

