import React, {useState, useEffect} from 'react';
import {fetchFilms} from './api'
import { StyleSheet, ScrollView, Text, FlatList, View} from 'react-native';
import Film from './Film';



export default function ResultsScreen({route, navigation}){
    const {search} = route.params;

    const handleFilmSelect = (film) => {
        navigation.navigate('Details',{selected: film})
    }
    
    return(
        <ResultsList 
        title = {search}
        onSelectFilm = {handleFilmSelect}/>
    )
}

const ResultsList = (props) => {
    const [results, setResults] = useState({films: []});
    const [query, setQuery] = useState(`${props.title}`);

    useEffect(()=> {
        let ignore = false;

        function addResults(newResult){
            setResults({films:[newResult]})
        }

        async function getFilms(){
            const response = await fetchFilms(query)
            if(!ignore) addResults(response);
        }

        getFilms();
        return () => {ignore = true; } 
    }, [query])

    return(
        <View style = {styles.container}>
            <FlatList
            data = {results.films}
            renderItem = {({item}) => <Film {...item} onSelectFilm = {props.onSelectFilm}/>}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
        backgroundColor: 'rgb(252, 237, 157)',
      },
    containerNotFound:{
        flex: 1,
        backgroundColor: 'rgb(250, 195, 194)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    notfound: {
        fontSize: 20,
    }
  });