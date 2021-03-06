import React, { useState, useEffect } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    ScrollView,
    FlatList,
    Image,
    Dimensions,
    StatusBar,
    StyleSheet,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import HTMLView from 'react-native-htmlview';
import { Feather } from '@expo/vector-icons';
import Related from '../Components/Related';
import ProductModal from '../Components/ProductModal';
import { connect } from 'react-redux';
import * as Config from '../Hooks/Config';

const Detail = (props) => {
    const { route, navigation, products } = props
    const { item } = route.params;
    const [modalVisible, setModalVisible] = useState(false);
    const [shopped, setShopped] = useState(false)

    useEffect(() => {
        products.map(i => {
            if (item.id == i.id) {
                setShopped(true)
            }
        })
    }, [products])

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff'
        }}>

            <ProductModal
                item={item}
                modalvisibility={modalVisible}
                pressHandler={() => { setModalVisible(!modalVisible) }}
                shoppedProduct={shopped}
            />

            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
                style={{
                    position: 'absolute',
                    zIndex: 9
                }}>
                <Feather
                    name="arrow-left"
                    style={{
                        fontSize: 25,
                        padding: 15
                    }}
                />
            </TouchableOpacity>
            <StatusBar hidden={true} />

            {/* <Header navigation={navigation} /> */}
            <ScrollView>
                <FlatList
                    horizontal
                    data={item.images}
                    keyExtractor={image => image.id.toString()}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <Image
                                source={{ uri: item.src.replace('localhost', Config.ip) }}
                                style={{
                                    width: Dimensions.get('screen').width,
                                    height: Dimensions.get('screen').height * 0.75
                                }}
                            />
                        )
                    }}
                />
                <LinearGradient
                    colors={['#ffffff00', '#ffffff80', '#ffffff', '#ffffff']}
                    style={{ marginTop: -85, padding: 15 }}
                >
                    <Text
                        style={{
                            fontSize: 25,

                            fontWeight: "bold"
                        }}
                    >
                        {item.name}
                    </Text>
                    <Text
                        style={{
                            fontSize: 18,
                            marginVertical: 10,
                        }}
                    >
                        RS {item.price}
                    </Text>

                </LinearGradient>
                <View
                    style={{
                        paddingHorizontal: 15,
                        marginTop: -15
                    }}
                >
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "bold",
                        marginBottom: 10
                    }}>Description</Text>
                    <HTMLView
                        addLineBreaks={false}
                        value={`<div>${item.description.replace(/(\r\n|\n|\r)/gm, "")}</div>`}
                    // style={detailstyle.description}
                    />
                </View>
                <TouchableOpacity
                    style={detailstyle.buybtn}
                    onPress={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <Text
                        style={detailstyle.buybtntext}
                    >
                        {
                            shopped ? 'Added to Cart' : 'Buy Now'
                        }
                    </Text>
                </TouchableOpacity>
                <Related products={item.related_ids} navigation={navigation} />
            </ScrollView>

        </View>
    )
}


const detailstyle = StyleSheet.create({
    description: {
        fontSize: 16
    },
    buybtn: {
        backgroundColor: '#ff6e00',
        borderRadius: 5,
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical: 10,
        flex: 1,
        marginHorizontal: 15
    },
    buybtntext: {
        color: '#fff',
        fontSize: 18,
        fontWeight: "bold"

    }
})


const mapStatetoProp = state => {
    return {
        products: state.products
    }
}

export default connect(mapStatetoProp)(Detail)