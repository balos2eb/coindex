import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [cryptocurrencies, setCryptocurrencies] = useState([]);

    // fetch cryptocurrency data, get top 50 currencies only
    useEffect(() => {
        const fetchCryptoCurrencies = async () => {
            try {
                const response = await axios.get('https://api.coincap.io/v2/assets?limit=50');
                setCryptocurrencies(response.data.data);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }

        fetchCryptoCurrencies();
    }, []);

    return (
        <div className="crypto-text">
            <div className="home-text">
                <h1 className="heading">Coindex</h1>
                <p className="sub-heading">The top 50 cryptos sorted by marketcap</p>
            </div>
            <ul className="crypto-list">
                <li className="crypto-item labels">
                    <span className="rank">Rank</span>
                    <span className="crypto-label">Name</span>
                    <span className="price">Price</span>
                    <span className="change">24h %</span>
                    <span className="market-cap">Market Cap</span>
                    <span className="supply">Supply</span>
                </li>
                {cryptocurrencies.map(crypto => (
                    <li key={crypto.id} className="crypto-item">
                        <span className="rank">{crypto.rank}</span>
                        <a className="crypto-link" href={`/currencies/${crypto.id}`}>
                            {crypto.name} ({crypto.symbol})
                        </a>
                        <span className="price">
                            {`$${crypto.priceUsd < 0.01
                                ? parseFloat(crypto.priceUsd).toFixed(8)
                                : parseFloat(crypto.priceUsd).toLocaleString(undefined, { maximumFractionDigits: 2 })}`}
                        </span>
                        <span className="change">
                            {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
                        </span>
                        <span className="market-cap">
                            {`$${parseFloat(crypto.marketCapUsd).toLocaleString(undefined, { maximumFractionDigits: 0 })}`}
                        </span>
                        <span className="supply">
                            {parseFloat(crypto.supply).toLocaleString()}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
