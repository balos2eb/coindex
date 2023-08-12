import React from 'react';

function Documentation() {
    return (
        <div>
            <h1>How to Use the Site</h1>
            <p>Welcome to my crypto portfolio website! Here's how you can use it:</p>
            <ol>
                <li>Visit the Home page to see the list of cryptocurrencies.</li>
                <li>Visit the Exchanges page to see the list of exchanges.</li>
                <li>Click on the name of a crypto or exchange to see the details page.</li>
                <li>Use the search bar to filter the list based on crypto names.</li>
                <li>The search bar has access to more cryptocurrencies and exchanges besides the ones displayed.</li>
                <li>Go to the Portfolio page to see your added cryptocurrencies and their quantities.</li>
                <li>Use the search bar to filter your portfolio.</li>
                <li>Edit or remove items from your portfolio as needed.</li>
            </ol>

            <h2>Assignment Criteria</h2>
            <p>How I met the assignment criteria:</p>
            <ul>
                <li><strong>App Componentization, Organization/Architecture:</strong> I've organized everything into components/pages to keep code clean and structured.</li>
                <li><strong>Adding, Removing, Editing, and Filtering features:</strong> You can add, remove, edit and filter in the portfolio section.</li>
                <li><strong>Client-side routing:</strong> I implemented client-side routing in the App.js file.</li>
                <li><strong>Used localStorage to persist some data:</strong> I used local storage to persist portfolio data.</li>
                <li><strong>Consumed public API:</strong> https://docs.coincap.io/ was used to fetch cryptocurrency data to display.</li>
                <li><strong>Deployed front-end app:</strong> Website uploaded to Netlify.</li>
                <li><strong>Well designed, tested, and free from errors:</strong> I tested in different browsers and once it was deployed.</li>
                <li><strong>Original and creative use of tools:</strong> I think I've used what we learned in class to make something that is original.</li>
            </ul>
        </div>
    );
}

export default Documentation;