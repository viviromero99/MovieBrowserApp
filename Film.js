import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';


const Film = props => {
    if(props.Error){
        return(
            <View style = {styles.containerNotFound}>
                <Text style = {styles.notfound}>  No Results Found </Text>
            </View>
        )
    }
    else{
        return(
            <TouchableOpacity style = {styles.container} onPress={() => props.onSelectFilm(props)}>
                <Text style={styles.filmText}>{props.Title}</Text>
                <Text style={styles.filmText}>{props.Year}</Text>
                <Text>
                    
                </Text>
                <Image source = {{uri: props.Poster}}/>
                <Text>

                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        borderWidth: 10,
        padding: 10,
        borderColor: 'rgb(215, 89, 194)',
    },
    filmText:{
        fontSize: 18,
        color: "rgb(215, 89, 194)",
    },
    containerNotFound:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notfound: {
        fontSize: 20,
    }
})

export default Film;