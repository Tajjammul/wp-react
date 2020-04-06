import React from 'react';
import {
    View,
    FlatList,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import HTMLView from 'react-native-htmlview';
import * as Config from '../Hooks/Config';

const Sales = (props) => {

    const { saleProducts, navigation } = props;
    return (
        <>
            <FlatList
                horizontal
                data={saleProducts}
                keyExtractor={product => product.id.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Detail', {
                                    item: item
                                })
                            }}
                            style={style.singleItem}>
                            <Image
                                source={{ uri: item.images[0].src.replace('localhost', Config.ip) }}
                                style={style.productimage}
                            />
                            <View style={{ paddingHorizontal: 10, paddingTop: 10 }}>
                                <Text style={style.title}>{item.name}</Text>
                                <HTMLView
                                    addLineBreaks={false}
                                    value={`<div>${item.short_description.replace(/(\r\n|\n|\r)/gm, "")}</div>`}
                                    stylesheet={style.description}
                                />
                                <Text style={style.price}>RS {item.price}</Text>
                            </View>

                        </TouchableOpacity>
                    )
                }}

            />
        </>
    );

}

const style = StyleSheet.create({
    singleItem: {
        width: Dimensions.get('screen').width * 0.95,
        marginHorizontal: 5,
    },
    productimage: {
        height: 200,
        width: Dimensions.get('screen').width * 0.95,
        borderRadius: 5
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5
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

export default Sales
