import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        if (searchQuery.trim() !== '') {
            // assumes search entered by user is crypto id
            const cryptoId = searchQuery.trim().toLowerCase();

            // use user's search to navigate to the crypto's page
            navigate(`/currencies/${cryptoId}`);

            // clear input text after search
            setSearchQuery('');
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for a crypto.."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default Searchbar;
