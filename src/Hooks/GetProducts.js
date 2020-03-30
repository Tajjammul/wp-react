import { useEffect, useState } from 'react';
import TokenAuth from './TokenAuth';
import axios from 'axios';

export default () => {
    const [BaseUrl, token] = TokenAuth()
    const [Categories, setCategories] = useState([])
    const [Featuredproducts, setFeatured] = useState([])
    const [Saleproducts, setSale] = useState([])
    const [products, setProducts] = useState([])


    useEffect(() => {
        //Categories
        get_products(BaseUrl + '/wc/v3/products/categories', token).then(res => {
            setCategories(res)
        }).catch(error => {
            console.log(error)
        })

        //All products
        get_products(BaseUrl + '/wc/v3/products/', token).then(res => {
            setProducts(res)
        }).catch(error => {
            console.log(error)
        })

        //featured products
        get_products(BaseUrl + '/wc/v3/products', token, { featured: true }).then(res => {
            setFeatured(res)
        }).catch(error => {
            console.log(error)
        })

        //Sale products
        get_products(BaseUrl + '/wc/v3/products', token, { on_sale: true }).then(res => {
            setSale(res)
        }).catch(error => {
            console.log(error)
        })

    }, [token])



    return [products, Featuredproducts, Saleproducts, Categories];

}

export const get_token = () => {
    const [BaseUrl, token] = TokenAuth();
    return [token]
}

export const get_BaseUrl = () => {
    const [BaseUrl, token] = TokenAuth()
    return [BaseUrl];
}

export async function get_products(url, token, params = {}) {

    let response = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        params: params
    })
    let products = await response.data;
    // console.log(products)
    return products;
}
