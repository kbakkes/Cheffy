import React from 'react';
import { ScrollView   } from 'react-native';
import {Card, CardItem, Thumbnail, Body, Left, Text, Icon, H3, List, ListItem, Separator, Right, Radio } from 'native-base';
import _ from "underscore";

export default class DetailScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
        headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
        headerStyle:{
            backgroundColor:'white',
        },
    });

    componentDidMount(){
        this.setState({

        })
    }




    returnRating(ratingNumber){

        if(ratingNumber === null) {

        }
        let stars = [];
        for(let i = 0; i < ratingNumber; i++){
             stars.push(<Icon type='FontAwesome' name='star' style={{color: '#ffdb03', fontSize: 25}} />)
        }
        return  _.map(stars, function (rating) {
            return rating
        });

    }

    //onpress render selected is true
    // onpress render selected is false

    returnIngredient(ingredients){
        let toggle = false;

        return _.map(ingredients, function(ingredient){
            return(
            <ListItem selected={toggle}>
                <Left>
                    <Text>{ingredient}</Text>
                </Left>
                <Right>
                    <Radio selected={toggle} />
                </Right>
            </ListItem>
            )
        })
    }








    render(){
        const { navigation }  = this.props;
        const recipe = navigation.getParam('recipe', 'No Recipe');

        console.log(recipe);

        return(
            <ScrollView>
                <List style={{backgroundColor: 'white'}}>
                    <ListItem>
                        <Left>
                            <Thumbnail large circular source={{uri: recipe.smallImageUrls[0]}} />
                            <Body>
                            <Text>{recipe.recipeName}</Text>
                            <Text note>{this.returnRating(recipe.rating)}</Text>
                            </Body>
                        </Left>
                    </ListItem>
                <Separator bordered>
                    <Text>INGREDIENTS</Text>
                </Separator>
                    {this.returnIngredient(recipe.ingredients)}
                </List>
            </ScrollView>
        )
    }
}