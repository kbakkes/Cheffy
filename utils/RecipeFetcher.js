import _ from 'underscore';
import React, { Component } from 'react';
import {Text, View, ScrollView } from 'react-native';
import ResultComponent from "../components/ResultComponent";
import { Spinner } from 'native-base';

const id = '47d5b17b';
const key = '9ae07c47a0474c4c05fac5cd08278edd';
const API = 'http://api.yummly.com/v1/api/recipes?_app_id='+id+'&_app_key='+key+'&q=';


export default class RecipeFetcher extends Component {
    constructor(props){
        super();
        this.state = {
            isLoading: true,
            recipes: []
        }
    }

    componentWillMount(){
        let ingredients = this.props.ingredients;
        fetch(API + ingredients)
            .then(res => res.json())
            .then(recipes => {
                this.setState({
                    isLoading: false,
                    recipes
                });
            });
    }


    returnRecipes(recipesList){
        console.log(recipesList);
       return  _.map(recipesList, function (recipe) {
            console.log(recipe.recipeName);
            return <ResultComponent recipe={recipe} />
        });

    }



    render() {
        if(this.state.isLoading === true){
            return (
                <View style={{marginTop:250}}>
                    <Spinner color='blue' />
                </View>
            )
        }
        console.log(this.state.recipes.matches.length);
        return (
            <ScrollView>
                {this.returnRecipes(this.state.recipes.matches)}
            </ScrollView>
        );
    }
}