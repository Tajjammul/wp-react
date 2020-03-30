import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

export default () => {

    const [token, setToken] = useState('');
    const BaseUrl = 'http://192.168.1.106:8081/papashop/wp-json';
    useEffect(() => {
        get_token().then(res => {
            setToken(res)
        })
    }, []);

    const get_token = async () => {
        let token_info = await AsyncStorage.getItem('AUTH_TOKEN');
        return token_info;
    }
    return [BaseUrl, token, setToken];
}