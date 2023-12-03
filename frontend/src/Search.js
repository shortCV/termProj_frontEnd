import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'
import placeHold from "./images/placeholder-image-dark.jpg";

const Search = () => {
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get("q");
    const [filteredSongs, setFilteredSongs] = useState([]);

    useEffect(() => {
        // Fetch songs based on the search query
        const fetchSongs = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/get_songs/?search_update=${searchQuery}`);
                const data = await response.json();
                setFilteredSongs(data.songs);
            } catch (error) {
                console.error("Something has gone wrong with filtering songs:", error);
            }
        };
        fetchSongs();
    }, [searchQuery]);

    return (
        <div>
            <Navbar />
            <h2>Search</h2>
            <h4>Results for: {searchQuery}</h4>

            <h4>Songs</h4>
            <ul>
                {filteredSongs.filter(song => song.title.includes(searchQuery)).map((song) => (
                    <li key={song.title}>{song.title} by {song.artist.join(', ')}</li>
                ))}
            </ul>
            {/*            <ul>
                {filteredSongs.map((song) => (
                    <li key={song.title}>{song.title} by {song.artist.join(', ')}</li>
                ))}
            </ul>*/}
            <h4>Artists</h4>
            {/* Your playlists component content goes here */}
        </div>
    );
};

export default Search;