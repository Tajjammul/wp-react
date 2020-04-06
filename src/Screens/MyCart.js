import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import CartScrollingItems from '../Components/CartScrollingItems';
import CartProductsPanel from '../Components/CartProductsPanel';
import { connect } from 'react-redux';

const MyCart = (props) => {

    const { onPress, total, products } = props

    return (
        <View
            style={MyCartStyle.container}
        >
            <StatusBar
                hidden={false}
                barStyle="light-content"
            />
            <SafeAreaView>
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

                        <Text
                            style={MyCartStyle.heading}
                        >My Cart ({products.length})</Text>
                        <Text
                            style={{
                                fontSize: 22,
                                color: '#ff6e00',
                                position: 'absolute',
                                top: 20,
                                right: 25
                            }}
                        >RS {total}</Text>
                    </View>
                    <CartScrollingItems />

                </View>
                <CartProductsPanel />

            </SafeAreaView>

            <TouchableOpacity
                style={MyCartStyle.checkoutbtn}
            >
                <Text
                    style={MyCartStyle.checkoutbtnText}
                >Checkout</Text>
            </TouchableOpacity>

        </View>
    )

}

const MyCartStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#20202b'
    },

    headerTop: {
        flexDirection: 'row',
    },
    heading: {
        color: '#fff',
        fontSize: 24,
        marginLeft: 40,
        paddingVertical: 15,

    },
    checkoutbtn: {
        backgroundColor: '#ff6e00',
        marginHorizontal: 15,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
        borderRadius: 50
    },
    checkoutbtnText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: "bold"
    }
});

const mapStateToProps = state => {
    let total = 0
    state.products.map(item => {
        total += item.total
    })
    return {
        total: total,
        products: state.products
    }
}

export default connect(mapStateToProps)(MyCart);