import React from 'react';
import {View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle} 
            placeholder='Search'
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#D3D3D3',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        paddingLeft: 5,
        fontSize: 20
    }
})

export default SearchBar;