import React from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Dimensions,

} from 'react-native';
import { connect } from 'react-redux';
import CartItems from './CartItems';
const CartProductsPanel = (props) => {

    const { products } = props

    return (
        <View
            style={{
                height: Dimensions.get('screen').height * 0.6
            }}
        >
            <ScrollView
                style={panelStyle.cartpanel}
            >
                {
                    products.map(item => {
                        return (
                            <CartItems key={item.id} item={item} />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

const panelStyle = StyleSheet.create({
    cartpanel: {
        flex: 1,
        marginBottom: 0,
        // backgroundColor: '#fff'
    }
});


const mapStatetoProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStatetoProps)(CartProductsPanel)
