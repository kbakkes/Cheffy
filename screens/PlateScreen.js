import React from 'react';
import {Text, View, Button, Image, ScrollView,TouchableOpacity } from 'react-native';
import PlateComponent from "../components/PlateComponent";
import IngredientScroller from "../components/IngredientScroller";
import { Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import _ from 'underscore';
import BeefIngredients from './../utils/ingredients/beef';
import ChickenIngredients from './../utils/ingredients/chicken';
import {Thumbnail } from 'native-base';


export default class PlateScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            category: '',
            ingredients: [],
        };
        this.returnIngredientComponents = this.returnIngredientComponents.bind(this);
        this.addToIngredients = this.addToIngredients.bind(this);
    }

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
        headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
        headerStyle:{
            backgroundColor:'white',
        },
    });

    MapIngredients(IngredientList){
        return (
            _.map(IngredientList, function (IngredientObjects) {
                console.log(IngredientObjects);
                return _.map(IngredientObjects, function(Ingredient){
                    let url = Ingredient.url;
                    let ingredient = Ingredient.name;
                    return(
                        <Image source={{uri:url}} style={{width: 110, height: 70}}/>
                    );
                })
            }))
    }


    returnIngredientComponents(category){
        if (category === 'beef') {
            return (
             _.map(BeefIngredients, function (BeefObjects) {
                console.log(BeefObjects);
                return _.map(BeefObjects, function(Ingredient){
                    let url = Ingredient.url;
                    let ingredient = Ingredient.name;
                    return(
                        <TouchableOpacity onPress={this.addToIngredients(ingredient).bind(this)}>
                         <Image source={{uri:url}} style={{width: 110, height: 70}}/>
                        </TouchableOpacity>
                    );
                })
            }))
        }
        if(category === 'chicken'){
            return (
                _.map(BeefIngredients, function (BeefObjects) {
                    console.log(BeefObjects);
                    return _.map(BeefObjects, function(Ingredient){
                        let url = Ingredient.url;
                        let ingredient = Ingredient.name;
                        return(
                            <Image source={{uri:url}} style={{width: 110, height: 70}}/>
                        );
                    })
                }))
        }
    }

    addToIngredients(ingredient){
        if(this.state.ingredients.length > 11){
            console.log('Er zijn er al 10');
            console.log('test');
        }
        else {
            this.state.ingredients.push((ingredient));
        }
    }



    returnSelectedIngredients(ingredient){
        if(this.state.ingredients.length > 11){
            console.log('Er zijn er al 10');
        }
        else {
            this.state.ingredients.push((ingredient));
        }

        return this.state.ingredients.join(', ')
    }


    stringifyIngredients(){
        console.log(this.state);
        console.log(this.state.ingredients.join('+'));
        return 'salmon';
    }


    setCategoryState(category){
        this.returnSelectedIngredients(); // add to die ene text
        this.setState({
           category: category
        });
        console.log(this.state);
    }


    returnCaterogies(){
        return(
            <ScrollView
            horizontal={true} >
                <TouchableOpacity onPress={() =>this.setCategoryState('beef')}>
                    <Image source={require('./../images/icons/iconMeat.png')} style={{width: 100, height: 100}}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() =>this.setCategoryState('chicken')}>
                    <Image source={require('./../images/icons/iconChicken.png')} style={{width: 100, height: 100}}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() =>this.setCategoryState('fish')}>
                    <Image source={require('./../images/icons/iconFish.png')} style={{width: 100, height: 100}}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() =>this.setCategoryState('bread')}>
                    <Image source={require('./../images/icons/iconBread.png')} style={{width: 100, height: 100}}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() =>this.setCategoryState('herbs')}>
                    <Image source={require('./../images/icons/iconCheese.png')} style={{width: 100, height: 100}}/>
                </TouchableOpacity>
            </ScrollView>
        )
    }

    render(){
        console.log(this.stringifyIngredients());
        return(
            <View>
                {this.returnCaterogies()}
                <ScrollView horizontal={true}>
                {this.returnIngredientComponents(this.state.category)}
                </ScrollView>
                    <Grid>
                        <Row style={{
                            height:290,
                            backgroundColor: '#ffc5d8',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <View>
                                <PlateComponent/>
                            </View>
                        </Row>
                        <Row style={{
                            height: 80,
                            backgroundColor: '#91b8ff',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <View>
                                <Text style={{fontStyle: 'bold', fontSize: 20, textAlign:'center'}}>
                                    Selected Ingredients:
                                </Text>
                                <Text style={{textAlign:'center'}}>
                                    {this.returnSelectedIngredients()}
                                </Text>
                            </View>
                        </Row>
                        <Row  style={{
                            height: 60,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#ffc183',
                        }}>
                            <View>
                            <Button
                                light
                                title="Search Recipes"
                                onPress={() => this.props.navigation.navigate('Result', {
                                        title: 'Results',
                                        ingredients: this.stringifyIngredients(),
                                    }
                                )}
                            />
                            </View>
                        </Row>

                    </Grid>

            </View>
        )
    }
}

