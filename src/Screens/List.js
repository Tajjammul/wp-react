import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { get_BaseUrl, get_token, get_products } from '../Hooks/GetProducts';
import Products from '../Components/products';



const List = ({ route, navigation }) => {

    const { type, title } = route.params
    const [token] = get_token();
    const [BaseUrl] = get_BaseUrl();
    const [products, setproducts] = useState([]);
    var [page, setpage] = useState(1);
    const [loadStatus, setloadstatus] = useState(false);


    useEffect(() => {

        navigation.setOptions({ title: title })

        setloadstatus(false);
        let params = {
            page: page
        }
        if (type == 'featured') {
            params = { ...params, featured: true }
        }
        if (type == 'sale') {
            params = { ...params, on_sale: true }
        }
        if (type == 'category') {
            let { cat_id } = route.params
            params = { ...params, category: cat_id }
        }
        get_products(BaseUrl + '/wc/v3/products', token, params).then(res => {
            setloadstatus(true);
            setproducts(products.concat(res))
        }).catch(error => console.log(error))

    }, [token, page]);



    return (
        <SafeAreaView style={{ backgroundColor: '#fff', paddingBottom: 20, flex: 1 }}>
            <ScrollView
                onScrollBeginDrag={() => {
                    setpage(page++);
                }}
                scrollEventThrottle={16}
                style={{ paddingVertical: 10, flex: 1 }}>
                <Products products={products} navigation={navigation} />
                {
                    loadStatus == false ?
                        <View>
                            <Text style={{ fontSize: 18, padding: 10, alignSelf: 'center' }}>Loading...</Text>
                        </View>
                        : null

                }
                {
                    (products.length <= 0 && loadStatus == true) ?
                        <View>
                            <Text style={{ fontSize: 18, padding: 10, alignSelf: 'center' }}>No Result Found</Text>
                        </View>
                        : null
                }
            </ScrollView>

        </SafeAreaView>

    )

}

export default List