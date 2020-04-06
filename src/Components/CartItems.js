import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';

const CartItems = ({ item }) => {
    return (
        <View
            style={ItemStyle.itemContainer}
        >
            <View
                style={ItemStyle.itemImage}
            >
                <Image
                    source={{ uri: item.img }}
                    style={ItemStyle.itemImg}
                />
            </View>
            <View
                style={{
                    marginHorizontal: 10
                }}
            >
                <Text
                    style={ItemStyle.title}
                >{item.name}</Text>
                <Text
                    style={ItemStyle.qty}
                >Quantity {item.quantity}</Text>
                <Text
                    style={ItemStyle.price}
                >RS {item.price}</Text>
            </View>
            <View
                style={ItemStyle.total}
            >
                <Text
                    style={ItemStyle.totaltext}
                >RS {item.total}</Text>
            </View>

        </View>
    )
}

const ItemStyle = StyleSheet.create({
    itemContainer: {
        flex: 1,
        height: 90,
        margin: 5,
        borderRadius: 10,
        backgroundColor: '#282831',
        flexDirection: 'row',
        paddingTop: 15,
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    itemImage: {
        height: 75,
        width: 70,
    },
    itemImg: {
        flex: 1,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    title: {
        color: '#fff',
        fontSize: 18,
    },
    qty: {
        color: '#fff',
        fontSize: 17,
        marginTop: 5
    },
    price: {
        color: '#fff',
        fontSize: 16,
        marginTop: 5
    },
    total: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    totaltext: {
        color: '#ff6e00',
        paddingHorizontal: 15,
        fontSize: 16
    }
});

export default CartItems;