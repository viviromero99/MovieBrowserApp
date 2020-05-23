import React from 'react';
import { StyleSheet, Text, ScrollView} from 'react-native';

export default function FilmDetailsScreen ({navigation, route}){
    const {selected} = route.params
    
    return(
        <ScrollView style = {styles.container} >
            <Text>Title: {selected.Title}</Text>
            <Text>

            </Text>
            <Text>Year: {selected.Year}</Text>
            <Text>

            </Text>
            <Text>Released: {selected.Released}</Text>
            <Text>

            </Text>
            <Text>Runtime: {selected.Runtime}</Text>
            <Text>

            </Text>
            <Text>Genre: {selected.Genre}</Text>
            <Text>

            </Text>
            <Text>Plot: {selected.Plot}</Text>
            <Text>

            </Text>
            <Text>Language: {selected.Language}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    filmContainer: {
        width: "80%",
        aspectRatio: 4/1,
        alignContent: "center",
        margin: "5%",
    },
    container: {
      flex: 1,
      padding: 35,
      backgroundColor: 'rgb(159, 212, 251)',
      alignContent: 'center',
    },
  });