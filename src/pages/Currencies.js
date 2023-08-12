import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Currencies() {
    const { id } = useParams();
    const [currency, setCurrency] = useState('');

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                const response = await axios.get(`https://api.coincap.io/v2/assets?ids=${id}`);
                setCurrency(response.data.data);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }

        fetchCurrency();
    }, [id]);

    /* tell user currency does not exist */
    if (currency == "") {
        return <div>Currency not found.</div>
    }

    return (
        <div className="currencies-text">
            {currency.map(crypto => (
                <div className="crypto-card " key={crypto.id}>
                    <h1>{crypto.name} ({crypto.symbol})</h1>
                    <p className="market-cap">Market Cap (USD): ${parseFloat(crypto.marketCapUsd).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}</p>
                    <p className="volume">Volume (24hr): ${parseFloat(crypto.volumeUsd24Hr).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}</p>
                    <p>Rank: {crypto.rank}</p>
                    <p>Supply: {parseFloat(crypto.supply).toLocaleString()}</p>
                    <p>Max Supply: {crypto.maxSupply ? parseFloat(crypto.maxSupply).toLocaleString() : 'N/A'}</p>
                </div>
            ))}
        </div>
    );
}

export default Currencies;
