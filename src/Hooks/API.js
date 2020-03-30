import axios from 'axios';
import TokenAuth from './TokenAuth';

export default axios.create({
    baseURL: TokenAuth().token,
    headers: {
        Authorization: 'Bearer ' + TokenAuth().TokenAuth
    }
});

