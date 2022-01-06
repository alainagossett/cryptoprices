import { useState, useEffect } from 'react';

const Price = (props) => {
    //API key from coinapi.io
    const apiKey = '3357CD3A-BBCB-464D-BEAF-78516322812D'
    //grabbing the currency symbol from the URL param
    const symbol = props.match.params.symbol;
    //using the other two variables to create our URL
    const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

    const [ coin, setCoin ] = useState(null);

    async function getCoin() {
        const response = await fetch(url);
        const data = await response.json();
        setCoin(data)
    }

    useEffect(() => {
        getCoin();
    }, [])

    const loading = () => <h1>Loading...</h1>

    const loaded = () => {
        return (
            <div>
                <h1>{coin.asset_id_base}/{coin.asset_id_quote}</h1>
                <h2>{coin.rate}</h2>
            </div>
        )
    }

    return coin ? loaded() : loading();
};

export default Price;