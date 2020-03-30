import React from 'react';
import {
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    StyleSheet
} from 'react-native';

const FeaturedProducts = (props) => {

    let { featured, navigation } = props;
    return (
        <>
            <FlatList
                horizontal
                data={featured}
                keyExtractor={product => product.id.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            style={style.singleItem}
                            onPress={() => {
                                navigation.navigate('Detail', {
                                    item: item
                                })
                            }}
                        >
                            <Image
                                source={{ uri: item.images[0].src.replace('localhost', '192.168.1.106:8081') }}
                                style={style.productimage}
                            />
                            <Text style={style.title}>{item.name}</Text>
                            <Text style={style.price}>RS {item.price}</Text>
                        </TouchableOpacity>
                    );
                }}
            />
        </>
    )

}

const style = StyleSheet.create({
    singleItem: {
        width: 120,
        marginHorizontal: 5,

    },
    productimage: {
        height: 150,
        width: 120,
        borderRadius: 5
    },
    title: {
        color: '#636363',
        fontSize: 17,
        padding: 5,
        fontWeight: 'bold'
    },
    price: {
        color: '#ff6e00',
        paddingHorizontal: 5
    }
})
export default FeaturedProducts