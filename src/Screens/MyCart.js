import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import CartScrollingItems from '../Components/CartScrollingItems';
import CartProductsPanel from '../Components/CartProductsPanel';


const MyCart = (props) => {

    const { onPress } = props

    return (
        <View
            style={MyCartStyle.container}
        >
            {/* <SafeAreaView> */}
            <View style={MyCartStyle.header}>
                <View style={MyCartStyle.headerTop}>
                    <TouchableOpacity
                        onPress={() => { onPress() }}
                        style={{
                            position: 'absolute',
                            top: 16,
                            left: 10
                        }}
                    >
                        <Feather
                            name="arrow-left"
                            style={{
                                fontSize: 22,
                                color: '#fff'
                            }}
                        />
                    </TouchableOpacity>
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

            </View>
            <CartProductsPanel />

            {/* </SafeAreaView> */}
        </View>
    )

}

const MyCartStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#ff6e00',
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",

    },
    heading: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        // marginLeft: 10,
        paddingVertical: 15,

    }
});


export default MyCart;