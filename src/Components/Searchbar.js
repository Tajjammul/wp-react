import React from 'react';
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const Searchbar = (props) => {
    return (
        <View style={searchstyle.container}>
            <Feather
                name="search"
                style={searchstyle.icon}
            />
            <TextInput
                placeholder="Type here..."
                style={searchstyle.inputbox}
                {...props}
            />
        </View>
    )
}

const searchstyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 5,
        backgroundColor: '#e8e8e8',
        marginHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    icon: {
        fontSize: 25,
        textAlignVertical: "center"
    },
    inputbox: {
        flex: 1,
        fontSize: 18,
        padding: 5
    }
});

export default Searchbar