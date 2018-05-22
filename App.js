import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Faaks from './Faaks';
import Meme from './Meme';
import Pokelist from './pokelist';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

import { createStackNavigator } from 'react-navigation';




export default class App extends React.Component {


  render() {
      return (
        <RootStack/>
    );
  }
}
const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Profile: ProfileScreen,
    },
    {
        initialRouteName: 'Home',
    }
);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

