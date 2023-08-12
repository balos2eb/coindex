import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Portfolio() {
    // load portfolio data from local storage
    const loadPortfolio = localStorage.getItem("portfolioData") ? JSON.parse(localStorage.getItem("portfolioData")) : [];
    const [portfolio, setPortfolio] = useState(loadPortfolio);
    const [editingId, setEditingId] = useState(null);
    const [newItemName, setNewItemName] = useState('');
    const [newItemQuantity, setNewItemQuantity] = useState('');
    const [filterQuery, setFilterQuery] = useState('');
    const [cryptoData, setCryptoData] = useState([]);
    const [portfolioValue, setPortfolioValue] = useState(0);

    // fetch cryptocurrency data
    useEffect(() => {
        const fetchCryptoCurrencies = async () => {
            try {
                const response = await axios.get('https://api.coincap.io/v2/assets');
                setCryptoData(response.data.data);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        }

        fetchCryptoCurrencies();
    }, []);

    // calculate portfolio value
    const calculatePortfolioValue = () => {
        let totalValue = 0;

        for (const item of portfolio) {
            const crypto = cryptoData.find(crypto => crypto.name === item.name);
            if (crypto) {
                const currentPrice = parseFloat(crypto.priceUsd);
                const value = parseFloat(item.quantity) * currentPrice;
                totalValue += value;
            }
        }

        return totalValue;
    };

    // save updated portfolio data to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('portfolioData', JSON.stringify(portfolio));
        const calculatedValue = calculatePortfolioValue();
        setPortfolioValue(calculatedValue);
    }, [portfolio, cryptoData]);

    // add an item to the portfolio
    const handleAddItem = () => {
        if (newItemName && newItemQuantity) {
            const newItem = {
                id: Date.now(),
                name: newItemName,
                quantity: newItemQuantity,
            };
            setPortfolio([...portfolio, newItem]);
            setNewItemName('');
            setNewItemQuantity('');
        }
    };

    // remove an item from the portfolio
    const handleRemoveItem = (id) => {
        setPortfolio(portfolio.filter(item => item.id !== id));
    };

    // update an item from the portfolio
    const handleEditItem = (id, updatedItem) => {
        const updatedData = portfolio.map(item =>
            item.id === id ? { ...item, ...updatedItem } : item
        );
        setPortfolio(updatedData);
    };

    // filter portfolio items
    const filteredItems = portfolio.filter(item => {
        return item.name.toLowerCase().includes(filterQuery.toLowerCase());
    });

    return (
        <div className="portfolio-container">
            <div className="portfolio-form">
                <input
                    type="text"
                    placeholder="Name"
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Quantity"
                    value={newItemQuantity}
                    onChange={(e) => setNewItemQuantity(e.target.value)}
                />
                <button onClick={handleAddItem}>Add Item</button>
            </div>
            <div className="portfolio-filter">
                <input
                    type="text"
                    placeholder="Search"
                    value={filterQuery}
                    onChange={(e) => setFilterQuery(e.target.value)}
                />
            </div>
            <ul className="portfolio-list">
                {filteredItems.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.quantity}
                        <button onClick={() => setEditingId(item.id)}>Edit</button>
                        <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                        {editingId === item.id && (
                            <div className="edit-form">
                                <input
                                    type="text"
                                    value={item.name}
                                    onChange={(e) =>
                                        handleEditItem(item.id, { ...item, name: e.target.value })
                                    }
                                />
                                <input
                                    type="text"
                                    value={item.quantity}
                                    onChange={(e) =>
                                        handleEditItem(item.id, { ...item, quantity: e.target.value })
                                    }
                                />
                                <button onClick={() => setEditingId(null)}>Done</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <p>Total Portfolio Value: ${portfolioValue.toFixed(2)}</p>
        </div>
    );
}

export default Portfolio;
