import { API, SECRET } from './bitthumb_api';

function price_lookup(coin){
    const jwt = require('jsonwebtoken');
    const { v4: uuidv4 } = require('uuid');
    const crypto = require('crypto');
    const querystring = require('querystring');
    const axios = require('axios')

    const accessKey = API 
    const secretKey = SECRET
    const apiUrl = 'https://api.bithumb.com'

    // Set API parameters
    const query = 'market=${coin}';

    // Generate access token
    const alg = 'SHA512'
    const hash = crypto.createHash(alg)
    const queryHash = hash.update(query, 'utf-8').digest('hex')
    const payload = {
        access_key: accessKey,
        nonce: uuidv4(),
        timestamp: Date.now(),
        query_hash: queryHash,
        query_hash_alg: alg
    }
    const jwtToken = jwt.sign(payload, secretKey)
    const config = {
        headers: {
            Authorization: `Bearer ${jwtToken}`
        }
    }

    // Call API
    axios.get(apiUrl + '/v1/orders/chance?' + query, config)
        .then((response) => {
            // handle to success
            console.log('status: ', response.status)
            console.log('data: ', response.data)
        })
        .catch((error) => {
            // handle to fail
            console.log(error.response.status)
            console.log(error.response.data)
        })

    return (response.status, response.data);
}

    export default price_lookup;