import React, { useState, useEffect } from 'react';
import { get_BaseUrl, get_token, get_products } from '../Hooks/GetProducts';
import { FlatList, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as Config from '../Hooks/Config';

const Related = ({ products, navigation }) => {

    const [relProducts, setRelProducts] = useState([]);
    var [relLenght, setrellenght] = useState(0);
    const [token] = get_token();
    const [BaseUrl] = get_BaseUrl();
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setRelProducts([])
        let ids = [];
        let ids_lenght = 0;
        ids = products.map(item => {
            ids_lenght++;
            return item
        })

        setrellenght(ids_lenght)
        if (ids_lenght > 0) {
            setLoading(true)
        }


        for (let i = 0; i < ids_lenght; i++) {
            let data = async () => {
                await new Promise(resolve => {

                    let resp = get_products(BaseUrl + '/wc/v3/products/' + products[i], token)
                    resolve(resp)
                }).then(res => {
                    setLoading(false)
                    setRelProducts(relp => [...relp, res])
                })
            }
            data().catch(error => {
                console.log(error)
            })

        }


    }, [token, products])



    return (
        <>
            {
                relLenght > 0 ?
                    <>
                        <Text
                            style={relStyle.heading}
                        >You May Also Like</Text>
                        <FlatList
                            horizontal
                            data={relProducts}
                            keyExtractor={prod => prod.id.toString()}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => {
                                            navigation.navigate('Detail', {
                                                item: item
                                            })
                                        }}
                                        style={relStyle.item}
                                    >
                                        <Image
                                            source={{
                                                uri: item.images[0].src.replace('localhost', Config.ip)
                                            }}
                                            style={relStyle.image}
                                        />
                                    </TouchableOpacity>
                                )
                            }}

                            style={{
                                marginBottom: 10
                            }}
                        />

                    </>
                    : null
            }
            {
                loading == true ?
                    <Text style={relStyle.loading}>Loading...</Text>
                    : null
            }

        </>
    )
}

const relStyle = StyleSheet.create({
    heading: {
        alignSelf: "center",
        fontSize: 17,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    item: {
        marginLeft: 10
    },
    image: {
        height: 60,
        width: 60
    },
    loading: {
        alignSelf: "center",
        fontSize: 15,
        paddingBottom: 10
    }
})

export default Related