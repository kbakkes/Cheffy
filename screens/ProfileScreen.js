import React from 'react';
import {Text, View, Button, Image , ScrollView  } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { List, ListItem, Icon, Left, Body, Right, Separator, Thumbnail } from 'native-base';








export default class ProfileScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
        headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
        headerStyle:{
            backgroundColor:'white',
        },
    });


    render(){
        return(
            <Grid>
            <Row style={{height: 30}}></Row>
                <ScrollView>
                    <List style={{backgroundColor: 'white'}}>
                        <ListItem>
                            <Left>
                                <Thumbnail circular source={require('./../images/icons/profile.png')}/>
                            </Left>
                            <Body>
                            <Text style={{fontStyle: 'bold', fontSize: 20,}}>Kbakkes</Text>
                            </Body>
                        </ListItem>
                        <Separator bordered>
                            <Text>INFO</Text>
                        </Separator>
                        <ListItem>
                            <Left>
                                <Body><Text>Username</Text></Body>
                            </Left>
                            <Body><Text>Kbakkes</Text></Body>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Body>
                                <Text>Email</Text>
                                </Body>
                            </Left>
                            <Body><Text>karim.bakkes@gmail.com</Text></Body>
                        </ListItem>
                        <ListItem>
                        <Left>
                            <Body>
                            <Text>First name</Text>
                            </Body>
                        </Left>
                        <Body><Text>Karim</Text></Body>
                    </ListItem>
                        <ListItem>
                            <Left>
                                <Body>
                                <Text>Last name</Text>
                                </Body>
                            </Left>
                            <Body><Text>Bakkes</Text></Body>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Body>
                                <Text>Favorite Dish</Text>
                                </Body>
                            </Left>
                            <Body><Text>Salmon Wrap</Text></Body>
                        </ListItem>
                    </List>
                </ScrollView>
            </Grid>
        )
    }
}


