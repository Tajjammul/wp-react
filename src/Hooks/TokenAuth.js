import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import * as Config from '../Hooks/Config';

export default () => {

    const [token, setToken] = useState('');
    const BaseUrl = Config.baseurl + 'wp-json';
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