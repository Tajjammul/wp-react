import React from 'react';
import {
    View,
    // FlatList,
    StyleSheet,
    TouchableOpacity,
    Image,
    Text
} from 'react-native';
import HTMLView from 'react-native-htmlview';
const Products = (props) => {

    const { products, navigation } = props
    return (
        <>
            {
                products.map(item => {
                    return (
                        <View key={item.id} style={productStyle.card}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('Detail', {
                                        item: item
                                    })
                                }}
                                style={productStyle.container}>
                                <View>
                                    {
                                        item.images ?
                                            <Image
                                                source={{ uri: item.images[0].src.replace('localhost', '192.168.1.106:8081') }}
                                                style={productStyle.image}
                                            />
                                            : null
                                    }

                                </View>
                                <View style={{
                                    paddingVertical: 10,
                                    paddingHorizontal: 10
                                }}>
                                    <Text style={productStyle.title}>{item.name}</Text>
                                    {
                                        item.short_description ?
                                            <HTMLView
                                                addLineBreaks={false}
                                                value={`<div>${item.short_description.replace(/(\r\n|\n|\r)/gm, "")}</div>`}
                                                stylesheet={productStyle.description}
                                            />
                                            : null
                                    }

                                    {/* <HTML html={item.short_description} style={productStyle.description} /> */}
                                    <Text style={productStyle.price}>RS {item.price}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
        </>
    )

}

const productStyle = StyleSheet.create({
    card: {
        marginBottom: 10,
        marginHorizontal: 10
    },
    container: {
        flexDirection: "row"
    },
    image: {
        height: 70,
        width: 80
    },
    title: {
        fontSize: 17,
        marginBottom: 3,
        fontWeight: 'bold'
    },
    description: {
        color: '#636363',
        fontSize: 15,
        paddingHorizontal: 10,
    },
    price: {
        marginTop: 3,
        color: '#ff6e00',
    }
})

export default Products