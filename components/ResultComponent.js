import React, { Component } from 'react';
import { Thumbnail, List, ListItem, Body, Text, Right, Left, Icon, Content, Container} from 'native-base';
import _ from "underscore";

export default class ResultComponent extends Component {

    returnRating(ratingNumber, starSize){

        if(ratingNumber === null) {

        }
        let stars = [];
        for(let i = 0; i < ratingNumber; i++){
            stars.push(<Icon type='FontAwesome' name='star' style={{color: '#ffdb03', fontSize: starSize}} />)
        }
        return  _.map(stars, function (rating) {
            return rating
        });

    }

    render() {
        let recipe = this.props.recipe;
        let imageUrl = recipe.smallImageUrls[0];


        return (
            <List style={{backgroundColor: 'white'}}>
                <ListItem onPress={() => this.props.navigation.navigate('Detail', {
                        title: recipe.recipeName,
                        recipe: recipe,
                    }
                )}>
                    <Thumbnail circular size={80} source={{ uri: imageUrl }} />
                    <Body>
                    <Text>{recipe.recipeName}</Text>
                    <Text note>{this.returnRating(recipe.rating,20)}</Text>
                    </Body>
                    <Right>
                        <Icon  name="arrow-forward" />
                    </Right>
                </ListItem>
            </List>


        );
    }
}

