import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Search = () => {
    const [results, setResults] = useState([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');

    useEffect(() => {
        fetch(`https://api.example.com/search?query=${query}`)
            .then(response => response.json())
            .then(data => setResults(data))
            .catch(error => console.error('Error fetching search results:', error));
    }, [query]);

    return (
        <div>
            <h1>Search Results</h1>
            <ul>
                {results.map(result => (
                    <li key={result.id}>{result.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Search;