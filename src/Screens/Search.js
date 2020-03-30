import React, { useState, useEffect } from 'react';
import Searchbar from '../Components/Searchbar';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';
import { get_BaseUrl, get_token, get_products } from '../Hooks/GetProducts';
import Products from '../Components/products';

const Search = ({ route, navigation }) => {

    const [search, setsearch] = useState('');
    const [result, setresult] = useState([]);
    const [loading, setLoading] = useState(false);
    var [page, setpage] = useState(1);
    // const [resultmessage, setresultmessage] = useState(true);
    const [searching, setsearching] = useState(false);
    const [token] = get_token();
    const [BaseUrl] = get_BaseUrl();



    useEffect(() => {
        if (search) {
            setsearching(true)
            // setresultmessage(false)
            get_products(BaseUrl + '/wc/v3/products', token, { search: search, page: page }).then(res => {
                setresult(res);
                setsearching(false)
                // setresultmessage(true)
            }).catch(error => console.log(error))

        } else {
            setresult([])
        }


    }, [token, search])


    const scrollHandler = () => {
        setLoading(true)
        setpage(page + 1)
        get_products(BaseUrl + '/wc/v3/products', token, { search: search, page: page }).then(res => {

            if (page == 1) {
                setresult(res);
            } else {
                setresult(result.concat(res))
            }
            setLoading(false)
            // setresultmessage(true)
        }).catch(error => console.log(error))
    }

    return (
        <SafeAreaView
            style={{
                backgroundColor: '#fff',
                flex: 1
            }}
        >
            <Searchbar value={search} onChangeText={text => {
                setpage(1)
                setsearch(text)
            }} />
            {
                searching ?
                    <View>
                        <Text style={{ fontSize: 18, padding: 10, alignSelf: 'center' }}>Searching....</Text>
                    </View>
                    : null

            }

            {/* {
                (resultmessage == false && searching == false) ?
                    <View>
                        <Text style={{ fontSize: 18, padding: 10, alignSelf: 'center' }}>No Result Found</Text>
                    </View>
                    : null
            } */}
            <ScrollView
                onScrollBeginDrag={() => {
                    scrollHandler()
                }}

            >
                <Products products={result} navigation={navigation} />
                {
                    loading ?
                        <View>
                            <Text style={{ fontSize: 18, padding: 10, alignSelf: 'center' }}>Loading....</Text>
                        </View>
                        : null

                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default Search