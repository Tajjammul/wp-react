import React, { useState } from "react";
import {
    View,
    Modal,
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
import { Feather, Ionicons } from '@expo/vector-icons';
import Related from '../Components/Related';
import FloatingLabel from 'react-native-floating-labels';


const Detail = ({ route, navigation }) => {

    const { item } = route.params;
    const [modalVisible, setModalVisible] = useState(false);


    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff'
        }}>

            <Modal
                transparent={true}
                visible={modalVisible}
            >
                <View
                    style={{
                        backgroundColor: '#00000090',
                        flex: 1,
                        alignItems: "center",
                        justifyContent: 'center'
                    }}
                >

                    <View
                        style={{
                            width: Dimensions.get('screen').width * 0.9,
                            backgroundColor: '#ff6e00f2',
                            borderRadius: 10,
                            paddingHorizontal: 15,
                            paddingVertical: 20,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.30,
                            shadowRadius: 4.65,

                            elevation: 8,
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: '#fff',
                                height: 100,
                                width: 100,
                                marginTop: -70,
                                justifyContent: 'center',
                                alignItems: "center",
                                alignSelf: "center",
                                borderRadius: 50
                            }}
                        >
                            <Feather
                                name="shopping-cart"
                                style={{
                                    fontSize: 30,
                                    fontWeight: "bold",
                                    color: '#ff6e00f2'
                                }}
                            />
                        </View>


                        {/* <Text
                            style={{
                                alignSelf: "center",
                                fontSize: 18,
                                fontWeight: "bold",
                                color: '#fff'
                            }}
                        >Buy Now</Text> */}
                        <View>
                            <FloatingLabel
                                labelStyle={{
                                    color: '#fff'
                                }}
                                inputStyle={{
                                    color: '#ffffff',
                                    fontSize: 18,
                                    borderWidth: 0,
                                    borderBottomColor: '#fff',
                                    borderBottomWidth: 1,
                                    padding: 10
                                }}

                            >Quantity</FloatingLabel>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: "center",
                                    justifyContent: 'center',
                                    marginTop: 20,
                                    // backgroundColor: '#fff',
                                    paddingVertical: 5,
                                    borderRadius: 10
                                }}
                            >
                                <View
                                    style={{
                                        backgroundColor: '#fff',
                                        paddingVertical: 10,
                                        paddingHorizontal: 13,
                                        borderRadius: 100,
                                        zIndex: 9
                                    }}
                                >
                                    <Ionicons
                                        name="md-cash"
                                        style={{
                                            fontSize: 20,
                                            color: '#ff6e00f2'
                                        }}
                                    />
                                </View>
                                <View
                                    style={{
                                        backgroundColor: '#222',
                                        borderRadius: 20,
                                        paddingVertical: 5,
                                        paddingLeft: 27,
                                        paddingRight: 10,
                                        marginLeft: -30,
                                        borderWidth: 1,
                                        borderColor: '#fff'
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: '#fff',
                                            fontSize: 25,
                                            marginHorizontal: 10
                                        }}
                                    >RS-{item.price}</Text>
                                </View>
                            </View>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: 'space-between'
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    alignSelf: 'flex-end',
                                    padding: 10,
                                    backgroundColor: '#fff',
                                    borderRadius: 100,
                                    width: 100,
                                    height: 40,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'row'
                                }}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <Feather
                                    name="x"
                                    style={{
                                        fontSize: 18,
                                        marginHorizontal: 1
                                    }}
                                />
                                <Text
                                    style={{
                                        fontSize: 18
                                    }}
                                >Cancle</Text>

                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#fff',
                                    borderRadius: 100,
                                    padding: 10,
                                    width: 100,
                                    height: 40,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: 20,
                                    flexDirection: 'row'
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 18,
                                        marginHorizontal: 1
                                    }}
                                >Cart</Text>
                                <Feather
                                    name="arrow-right"
                                    style={{
                                        fontSize: 18
                                    }}
                                />
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>


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
                                source={{ uri: item.src.replace('localhost', '192.168.1.106:8081') }}
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
                    >Buy Now</Text>
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

export default Detail