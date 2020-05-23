import React, {useState} from 'react';
import { StyleSheet, View, Button, TextInput} from 'react-native';



export default function SearchScreen({ navigation }){
    const [filmTitle, handleFilmTitle] = useState('');

    return(
        <View style = {styles.container}>
            <TextInput
            style = {styles.input}
            placeholder = "Search Film Title"
            defaultValue = {filmTitle}
            onChangeText = {filmTitle => handleFilmTitle(filmTitle)}
            />
            <Button title = 'Search' 
            onPress = {() => navigation.navigate("Search Results", {search: filmTitle})}
            disabled = {(filmTitle === '')}/>

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 40,
      backgroundColor: 'rgb(252, 237, 157)',
    },
    input: {
        flex: 0.09,
        borderWidth: 3,
        borderColor: 'pink',
        backgroundColor: 'white',
    }
  });