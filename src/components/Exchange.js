import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Exchange() {
    const { id } = useParams();
    const [exchange, setExchange] = useState('');

    useEffect(() => {
        const fetchExchange = async () => {
            try {
                const response = await axios.get(`https://api.coincap.io/v2/exchanges/${id}`);
                setExchange(response.data.data);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }

        fetchExchange();
        console.log(exchange);
    }, [id]);

    /* tell user exchange does not exist */
    if (exchange == "") {
        return <div>Exchange not found.</div>
    }

    return (
        <div className="exchange-text">
            <h1>{exchange.name}</h1>
            <p>Volume (USD): ${parseFloat(exchange.volumeUsd).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}</p>
            <p>Total Volume (%): {parseFloat(exchange.percentTotalVolume).toFixed(2)}</p>
            <p>Rank: {exchange.rank}</p>
            <p>Trading Pairs: {exchange.tradingPairs}</p>
            <p>Website: <a href={exchange.exchangeUrl} target="_blank" rel="noopener noreferrer">{exchange.exchangeUrl}</a></p>
        </div>
    );
}

export default Exchange;
