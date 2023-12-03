import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar'

const Search = () => (
    <div>
        <Navbar></Navbar>
        <h2>Search</h2>
        {/* Your playlists component content goes here */}
        <h4> results</h4>
    </div>
);

export default Search;