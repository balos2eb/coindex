import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [exchanges, setExchanges] = useState([]);

    // fetch exchanges data, get top 25 only
    useEffect(() => {
        const fetchExchanges = async () => {
            try {
                const response = await axios.get('https://api.coincap.io/v2/exchanges?limit=25');
                setExchanges(response.data.data);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }

        fetchExchanges();
    }, []);

    return (
        <div className="exchanges-text">
            <div className="home-text">
                <h1 className="heading">Coindex</h1>
                <p className="sub-heading">The top 25 exchanges sorted by volume</p>
            </div>
            <ul className="crypto-list">
                <li className="crypto-item labels">
                    <span className="rank">Exchange</span>
                </li>
                {exchanges.map(exchange => (
                    <li key={exchange.exchangeId} className="crypto-item">
                        <a className="crypto-link" href={`/exchanges/${exchange.exchangeId}`}>{exchange.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default Home;
