import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { createStackNavigator } from 'react-navigation';
import PlateScreen from "./screens/PlateScreen";
import ResultScreen from "./screens/ResultScreen";
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import DetailScreen from "./screens/DetailScreen";





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
        Plate: PlateScreen,
        Result: ResultScreen,
        Detail: DetailScreen,
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

