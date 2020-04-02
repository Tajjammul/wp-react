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
        // position: "absolute",
        // top: Dimensions.get('screen').height * 0.2,
        // right: 0,
        // left: 0,
        // height: Dimensions.get('screen').height * 0.80,
        // bottom: 0,
        // borderTopLeftRadius: 30,
        backgroundColor: '#fff',
    }
});

export default CartProductsPanel
