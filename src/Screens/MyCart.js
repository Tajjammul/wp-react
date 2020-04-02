import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import CartScrollingItems from '../Components/CartScrollingItems';
import CartProductsPanel from '../Components/CartProductsPanel';


const MyCart = (props) => {

    return (
        <View
            style={MyCartStyle.container}
        >
            <SafeAreaView>
                <View style={MyCartStyle.header}>
                    <Feather
                        name="shopping-cart"
                        style={{
                            fontSize: 24,
                            color: '#fff',
                            marginRight: 5
                        }}
                    />
                    <Text
                        style={MyCartStyle.heading}
                    >Cart Products</Text>
                </View>
                <CartScrollingItems />
                <CartProductsPanel />

            </SafeAreaView>
        </View>
    )

}

const MyCartStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff6e00',
    },
    header: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },
    heading: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        // marginLeft: 10,
        paddingVertical: 15,
        textAlign: 'center'
    }
});


export default MyCart;