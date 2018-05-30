import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import { Thumbnail, List, ListItem, Body, Text, Right, Left, Icon, Content, Container} from 'native-base';

export default class ResultComponent extends Component {



    render() {
        let recipe = this.props.recipe;
        let imageUrl = recipe.smallImageUrls[0];

        return (
            <List style={{backgroundColor: 'white'}}>
                <ListItem>
                    <Thumbnail circular size={80} source={{ uri: imageUrl }} />
                    <Body>
                    <Text>{recipe.recipeName}</Text>
                    <Text note>{recipe.ingredients.toString()}</Text>
                    </Body>
                    <Right>
                        <Icon  name="arrow-forward" />
                    </Right>
                </ListItem>
            </List>


        );
    }
}

