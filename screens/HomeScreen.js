import React from 'react';
import { View, Image,Button, ScrollView, Text } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Content, List, ListItem, Icon, Left, Body, Right, Switch, Separator } from 'native-base';



export default class HomeScreen extends React.Component {


    render(){
        return(
            <View>

                    <Grid>
                        <Row style={{height: 30}}></Row>
                        <Row style={{
                            height: 150,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image source={require('./../images/logo/cheffy.png')} style={{width: 310, height: 150}}/>
                        </Row>
                        <Row style={{height: 50}}></Row>
                        <Row style={{height: 300}}>

                            <ScrollView>
                                <List style={{backgroundColor: 'white'}}>
                                    <ListItem onPress={() => {
                                        this.props.navigation.navigate('Profile',{title: 'My Profile'})
                                    }}>
                                        <Left>
                                            <Icon type='FontAwesome' name='user'/>
                                            <Body>
                                            <Text>Profile</Text>
                                            </Body>
                                        </Left>
                                        <Right>
                                            <Icon name="arrow-forward" />
                                        </Right>
                                    </ListItem>
                                    <ListItem onPress={() => {
                                        this.props.navigation.navigate('Plate',{title: 'My Plate'})
                                    }}>
                                        <Left>
                                            <Icon type='MaterialIcons' name='restaurant'/>
                                            <Body>
                                            <Text>My Plate</Text>
                                            </Body>
                                        </Left>
                                        <Right>
                                            <Icon name="arrow-forward" />
                                        </Right>
                                    </ListItem>
                                </List>
                            </ScrollView>
                        </Row>

                    </Grid>
            </View>
        )
    }
}