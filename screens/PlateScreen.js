import React from 'react';
import {Text, View, Button, Image, ScrollView,TouchableOpacity } from 'react-native';
import PlateComponent from "../components/PlateComponent";
import IngredientComponent from "../components/IngredientComponent";


export default class PlateScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            category: '',
        }
    }

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
        headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
        headerStyle:{
            backgroundColor:'white',
        },
    });

    stringifyIngredients(){
        console.log(this.state);
        return 'salmon';
    }


    setCategoryState(category){
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
                <IngredientComponent category={this.state.category}/>
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

