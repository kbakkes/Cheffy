import React from 'react';
import {Text, View, Image, ScrollView,TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import _ from 'underscore';
import { Icon, Button, Toast } from 'native-base';
import PlateComponent from "../components/PlateComponent";
import BeefIngredients from './../utils/ingredients/beef';
import ChickenIngredients from './../utils/ingredients/chicken';
import FishIngredients from './../utils/ingredients/fish';
import VegetablesIngredients from './../utils/ingredients/vegetables';
import FruitIngredients from './../utils/ingredients/fruit';




export default class PlateScreen extends React.Component {
    constructor(){
        super();

        this.state = {
            category: '',
            ingredients: [],
        };
    }

    componentDidMount(){
        this.props.navigation.setParams({
            clearState:
            <Button transparent>
                <Icon type='MaterialIcons' name='delete'
                              onPress={ () => this.clearIngredients()} />
                </Button>
        });

    }

    clearIngredients(){
        this.setState({
            ingredients: []
        });
    }

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
        headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
        headerStyle:{
            backgroundColor:'white',
        },
        headerRight: navigation.state.params.clearState
    });

    mapIngredients(IngredientList){
        return (
            _.map(IngredientList,  (IngredientObjects) => {
                console.log(IngredientObjects);
                return _.map(IngredientObjects, (Ingredient) => {
                    let url = Ingredient.url;
                    let ingredient = Ingredient.name;
                    return(
                        <TouchableOpacity onPress={() => this.addToIngredients(ingredient)}>
                            <Image source={{uri:url}} style={{width: 110, height: 70}}/>
                        </TouchableOpacity>
                    );
                })
            }))
    }


    returnIngredientComponents(category){
        if (category === 'beef') {
            return this.mapIngredients(BeefIngredients);
        }
        if(category === 'chicken'){
            return this.mapIngredients(ChickenIngredients);
        }
        if(category === 'fish'){
            return this.mapIngredients(FishIngredients);
        }
        if(category === 'vegetables'){
            return this.mapIngredients(VegetablesIngredients);
        }
        if(category === 'fruit'){
            return this.mapIngredients(FruitIngredients);
        }
        else{
            console.log('geen category');
        }
    }

    addToIngredients(ingredient){
        if(this.state.ingredients.length > 11){
            console.log('Er zijn er al 10');
            console.log('test');
        }
        else if(ingredient === undefined){
            console.log('Ingredient is Undefined, so it wont be added...');
        }
        else if(this.state.ingredients.includes(ingredient)){
            console.log('Ingredient is already selected...')
        }
        else {
            this.state.ingredients.push(ingredient);
            console.log(ingredient, this.state.ingredients)
        }
    }




    returnSelectedIngredients(){
        return this.state.ingredients.join(', ')
    }


    stringifyIngredients(){
        return (this.state.ingredients.join('+'));
    }


    setCategoryState(category){
        this.setState({
            category: category
        });
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

                <TouchableOpacity onPress={() =>this.setCategoryState('vegetables')}>
                    <Image source={require('./../images/icons/iconVegetables.png')} style={{width: 100, height: 100}}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() =>this.setCategoryState('fruit')}>
                    <Image source={require('./../images/icons/iconFruit.png')} style={{width: 100, height: 100}}/>
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
                            <Text style={{textAlign:'center', fontStyle: 'bold'}}>
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
                            <Button transparent
                                onPress={() => this.props.navigation.navigate('Result', {
                                        title: 'Results',
                                        ingredients: this.stringifyIngredients(),
                                    }
                                )}
                            >
                                <Text style={{fontStyle: 'bold', fontSize: 20, textAlign:'center', color: '#3794fb'}}>
                                    Search Recipes
                                </Text>
                            </Button>
                        </View>
                    </Row>
                </Grid>
            </View>
        )
    }
}

