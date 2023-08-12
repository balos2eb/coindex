import React from 'react';

const Sources = () => {
    return (
        <div>
            <h1>Sources</h1>
            <p>Here are the sources I used and how they were implemented:</p>

            <h2>Search Bar</h2>
            <p>
                I used the search bar styling from this <a href="https://www.w3schools.com/howto/howto_css_searchbar.asp" target="_blank" rel="noopener noreferrer">W3Schools tutorial</a> to create the filtering functionality on both the main list and the portfolio.
            </p>

            <h2>Issues with Local Storage</h2>
            <p>
                I encountered some issues with local storage not persisting after a page refresh. I found a solution in this <a href="https://stackoverflow.com/questions/71961041/localstorage-is-saving-my-data-but-after-refresh-is-reseting-and-empty-it/71961318#71961318" target="_blank" rel="noopener noreferrer">StackOverflow post</a> that helped me ensure the data remains stored even after a refresh.
            </p>

            <h2>React Router DOM v6</h2>
            <p>
                I utilized React Router DOM version 6 to implement client-side routing. While we covered version 5.3.1 in class, I followed this <a href="https://blog.webdevsimplified.com/2022-07/react-router/" target="_blank" rel="noopener noreferrer">blog post</a> to understand the updates and changes in version 6.
            </p>

            <h2>Parse Float</h2>
            <p>
                I used the <code>parseFloat</code> function to convert string values to floating-point numbers. I referenced this <a href="https://www.w3schools.com/jsref/jsref_parsefloat.asp" target="_blank" rel="noopener noreferrer">W3Schools page</a> for more information on its usage.
            </p>

            <h2>toLocaleString()</h2>
            <p>
                To format numbers and currencies, I used the <code>toLocaleString()</code> function. This function is detailed in the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString" target="_blank" rel="noopener noreferrer">MDN Web Docs</a>.
            </p>

            <h2>useParams</h2>
            <p>
                I used the <code>useParams</code> hook from React Router to extract URL parameters. The documentation for this hook can be found on the <a href="https://reactrouter.com/en/main/hooks/use-params" target="_blank" rel="noopener noreferrer">React Router website</a>.
            </p>
        </div>
    );
}

export default Sources;
