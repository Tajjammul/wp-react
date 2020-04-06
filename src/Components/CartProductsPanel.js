import React from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Dimensions,
    Text
} from 'react-native';

const CartProductsPanel = (props) => {

    return (
        // <View

        // >
        <ScrollView style={panelStyle.cartpanel}>
            <Text>Got Text</Text>
        </ScrollView>
        // </View>
    )
}

const panelStyle = StyleSheet.create({
    cartpanel: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default CartProductsPanel
