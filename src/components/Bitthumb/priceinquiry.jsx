import { API, SECRET } from './config';
import React, { useEffect, useState } from "react";

export const CoinPriceDelta = ({coin}) => {
    const [price, setPrice] = useState(null);
    const [delta, setDelta] = useState(null);
    // const [high, setHigh] = useState(null);
    // const [low, setLow] = useState(null);
    // const [prev, setPrev] = useState(null);

    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchPrice = async () => {
            try {
                const url = `https://api.bithumb.com/v1/ticker?markets=${coin}`;
                // https://api.bithumb.com/v1/ticker?markets=KRW-BTC
                const response = await fetch(url);
                // Check if the response is ok
                if (!response.ok) {
                    throw new Error('-');
                }

                const data = await response.json();
                console.log(data[0])
                // console.log(data[0].trade_price)
                if (data[0].market = coin ) {
                    setPrice(data[0].trade_price);
                    setDelta(data[0].change_price / data[0].prev_closing_price);
                } else {
                    throw new Error('--');
                }
            } catch (err) {
                setError(err.message);
                console.error('---');
            }
        };
        fetchPrice();
    }, [coin]);

    return (
        <div>
            {error ? (
                <p>{error}</p> // Display error if there is one
            ) : price ? (
                <p>{delta}</p>
            ) : (
                <p>Loading</p> // Display loading message while fetching
            )}
        </div>
    );

};
export const FetchCoinPrice = ({coin}) => {

    const [price, setPrice] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchPrice = async () => {
            try {
                const url = `https://api.bithumb.com/v1/ticker?markets=${coin}`;
                // https://api.bithumb.com/v1/ticker?markets=KRW-BTC
                const response = await fetch(url);
                // Check if the response is ok
                if (!response.ok) {
                    throw new Error('-');
                }

                const data = await response.json();
                // console.log(data[0].market)
                // console.log(data[0].trade_price)
                if (data[0].market = coin ) {
                    setPrice(data[0].trade_price);
                } else {
                    throw new Error('--');
                }
            } catch (err) {
                setError(err.message);
                console.error('---');
            }
        };
        fetchPrice();
    }, [coin]);

    return (
        <div className="price">
            {error ? (
                <p>{error}</p> // Display error if there is one
            ) : price ? (
                <div className="text-wrapper-2">
                ₩{formatNumber(price)}</div> // Display price if available
            ) : (
                <p>Loading</p> // Display loading message while fetching
            )}
        </div>
    );
};

function order(coin){
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

        return (
        axios.get(apiUrl + '/v1/orders/chance?' + query, config)
        .then((response) => {
            return response.data; // Return the API response data
        })
        .catch((error) => {
            console.error(error.response.status);
            console.error(error.response.data);
            throw error; // Throw error to be handled in the component
        })
       
    );

};

const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
};
