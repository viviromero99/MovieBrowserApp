import React from 'react';
import { StyleSheet, View, Button} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './Search';
import ResultsScreen from './SearchResults';
import FilmDetailsScreen from './FilmDetails';
import { YellowBox } from 'react-native';


function Login({ navigation }){
  return(
    <View style = {styles.container}>
      <Button title = "Entrar" color = 'white' onPress = {() => navigation.navigate('Search')}/>
    </View>
  )
}

const AppStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName = "Start">
        <AppStack.Screen name = "Start" component = {Login}/>
        <AppStack.Screen name = "Search" component = {SearchScreen}/>
        <AppStack.Screen name = "Search Results" component = {ResultsScreen}/>
        <AppStack.Screen name = "Details" component = {FilmDetailsScreen}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(159, 212, 251)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: 'white'
  },
});
