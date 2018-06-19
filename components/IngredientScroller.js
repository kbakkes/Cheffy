import React, { Component } from 'react';
import {Image, ScrollView, Text, StyleSheet } from 'react-native';

export default class IngredientScroller extends Component {


    render() {
        let category = (this.props.category + '');
        console.log(category);

        console.log(this.props.category);
        if(this.props.category === ''){
            console.log('No Category Selected...');
            return <Text>Niks geselecteerd</Text>

        }
        if (category === 'beef') {
        return (
            <ScrollView
                horizontal={true}
                styles={{backgroundColor:'#FFF', borderWidth:1}}>
                <Text>Beef</Text>

            </ScrollView>)
        }
        else if(category === 'chicken'){
            return(
                <ScrollView
                horizontal={true}
                styles={styles.ingredients}>
                    <Image source={require('./../images/chicken/chicken-breast.png')} style={{width: 110, height: 70}}/>
                    <Image source={require('./../images/chicken/drumstick.png')} style={{width: 110, height: 70}}/>
                    <Image source={require('./../images/chicken/raw-chicken.png')} style={{width: 110, height: 70}}/>
                    <Image source={require('./../images/chicken/chicken-leg.png')} style={{width: 110, height: 70}}/>
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


