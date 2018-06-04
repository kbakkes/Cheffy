import React, { Component } from 'react';
import {Image, ScrollView, Text, StyleSheet } from 'react-native'

export default class IngredientComponent extends Component {
    render() {
        let category = (this.props.category + '');
        console.log(category);

        console.log(this.props.category);
        if(this.props.category === ''){
            console.log('No Category Selected...');
            return <Text style={styles.ing}>Niks geselecteerd</Text>

        }
        if (category === 'beef') {
        return (
            <ScrollView
                horizontal={true}
                styles={{backgroundColor:'white', borderWidth:1}}>
                    <Image source={require('./../images/beef/meatball.png')} style={{width: 120, height: 80}}/>
                    <Image source={require('./../images/beef/sausage.png')} style={{width: 120, height: 80}}/>
                    <Image source={require('./../images/beef/beef.png')} style={{width: 120, height: 80}}/>
                    <Image source={require('./../images/beef/patty.png')} style={{width: 120, height: 80}}/>
            </ScrollView>)
        }
        else if(category === 'chicken'){
            return(
                <ScrollView
                horizontal={true}
                styles={styles.ingredients}>
                    <Image source={require('./../images/chicken/chicken-breast.png')} style={{width: 120, height: 80}}/>
                    <Image source={require('./../images/chicken/drumstick.png')} style={{width: 120, height: 80}}/>
                    <Image source={require('./../images/chicken/raw-chicken.png')} style={{width: 120, height: 80}}/>
                    <Image source={require('./../images/chicken/chicken-leg.png')} style={{width: 120, height: 80}}/>
            </ScrollView>)
        }
        else{
            return (
                <Text>{this.props.category}</Text>
            )
        }

    }
}
const styles = StyleSheet.create({
    ingredients: {
        backgroundColor: '#FFF',
        borderColor: '#cbcbcb',
        borderWidth: 1,
    }
});

