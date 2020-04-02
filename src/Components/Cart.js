import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Animated,
    Dimensions,
    PanResponder,
    Modal
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { connect } from 'react-redux';
import MyCart from '../Screens/MyCart';


const pan = new Animated.ValueXY();

const Cart = (props) => {

    const [modalVisisble, setModalVisible] = useState(false)

    const PanResp = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderGrant: () => {
            pan.setOffset({
                x: pan.x._value,
                y: pan.y._value
            })

        },
        onPanResponderMove: Animated.event([
            null,
            { dx: pan.x, dy: pan.y }
        ]),
        onPanResponderRelease: () => {

            pan.flattenOffset();
            let coord = {
                x: pan.x._value,
                y: pan.y._value
            }
            if (pan.x._value >= 0) {
                coord = { ...coord, x: 0 }
            } else if (pan.x._value <= -Dimensions.get('screen').width * 0.7) {
                coord = { ...coord, x: -1 * Dimensions.get('screen').width * 0.7 }
            } else {
                coord = coord
            }

            if (pan.y._value >= -10) {
                coord = { ...coord, y: 0 }
            } else if (pan.y._value <= -Dimensions.get('screen').height * 0.8 - 10) {
                coord = { ...coord, y: -1 * Dimensions.get('screen').height * 0.8 - 10 }
            } else {
                coord = coord
            }
            Animated.spring(pan, { toValue: coord }).start();
        }
    });

    return (
        <>

            <Animated.View style={cartStyle.cartContainer}
                {...PanResp.panHandlers}
            >
                <TouchableOpacity
                    style={cartStyle.cartIconBack}
                    onPress={() => {
                        setModalVisible(true)
                    }}
                >
                    <View style={cartStyle.cartCount}>
                        <Text
                            style={cartStyle.cartText}
                        >{props.count}</Text>
                    </View>
                    <Feather
                        name="shopping-cart"
                        style={cartStyle.cartIcon}
                    />
                </TouchableOpacity>
            </Animated.View>
            <Modal
                visible={modalVisisble}
                animationType="slide"
            >
                <MyCart />
            </Modal>
        </>
    )

}

const cartStyle = StyleSheet.create({
    cartContainer: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        transform: [
            { translateX: pan.x },
            { translateY: pan.y }
        ]
    },
    cartIconBack: {
        backgroundColor: '#ff6e00',
        padding: 20,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cartIcon: {
        fontSize: 25,
        color: '#fff'
    },
    cartCount: {
        backgroundColor: '#222',
        padding: 5,
        paddingHorizontal: 8,
        position: 'absolute',
        bottom: 47,
        right: 47,
        alignItems: "center",
        borderRadius: 100
    },
    cartText: {
        color: '#fff',
        fontSize: 13
    }
})

const mapStatetoProp = state => {
    return {
        count: state.products.length
    }
}


export default connect(mapStatetoProp)(Cart)