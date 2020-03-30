import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import GetProducts from '../Hooks/GetProducts';
import Header from '../Components/Header';
import CategoryTabs from '../Components/CategoryTabs';
import FeaturedProducts from '../Components/FeaturedProducts';
import Products from '../Components/products';
import Sales from '../Components/Saleproducts';

const Home = ({ navigation }) => {

    const [products, Featuredproducts, Saleproducts, Categories] = GetProducts();

    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>

            <StatusBar />
            <SafeAreaView style={{ height: Dimensions.get('screen').height }}>
                <Header navigation={navigation} />
                <CategoryTabs categories={Categories} navigation={navigation} />
                <ScrollView>
                    {
                        Featuredproducts.length > 0 ?
                            <>
                                <View style={style.headingContainer}>
                                    <Text style={style.headings}>Featured</Text>
                                    <TouchableOpacity style={style.viewPage}
                                        onPress={() => navigation.navigate('List', {
                                            type: 'featured',
                                            title: 'Featured Products'
                                        })}
                                    >
                                        <Text style={style.viewText}>See All</Text>
                                    </TouchableOpacity>
                                </View>
                                <FeaturedProducts featured={Featuredproducts} navigation={navigation} />
                            </>
                            : null
                    }

                    {
                        Saleproducts.length > 0 ?
                            <>
                                <View style={style.headingContainer}>
                                    <Text style={style.headings}>On Sale</Text>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('List', {
                                            type: 'sale',
                                            title: 'On Sale Products'
                                        })}
                                        style={style.viewPage}>
                                        <Text style={style.viewText}>See All</Text>
                                    </TouchableOpacity>
                                </View>
                                <Sales saleProducts={Saleproducts} navigation={navigation} />
                            </>
                            : null
                    }


                    {
                        products.length > 0 ?
                            <>
                                <View style={style.headingContainer}>
                                    <Text style={style.headings}>Products</Text>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('List', {
                                            type: 'all',
                                            title: 'All Products'
                                        })}
                                        style={style.viewPage}>
                                        <Text style={style.viewText}>See All</Text>
                                    </TouchableOpacity>
                                </View>
                                <Products products={products} navigation={navigation} />
                            </>
                            : null
                    }

                </ScrollView>

            </SafeAreaView>
        </View>

    )


}

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },
    headings: {
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 10,
        marginHorizontal: 10
    },
    headingContainer: {
        width: Dimensions.get('screen').width,
        flexDirection: "row",
        justifyContent: 'space-between',
        textAlignVertical: 'center'
    },
    viewPage: {
        // alignSelf: 'flex-end',
        marginHorizontal: 10,
        paddingTop: 16
    },
    viewText: {
        color: '#ff6e00',
        fontSize: 16
    }
})

export default Home


