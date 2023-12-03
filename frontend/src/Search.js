import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'
import placeHold from "./images/placeholder-image-dark.jpg";

const Search = () => {
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get("q");
    const [filteredSongs, setFilteredSongs] = useState([]);
    const [filteredArtists, setFilteredArtists] = useState([]);
    const [filteredAlbums, setFilteredAlbums] = useState([]);

    useEffect(() => {
        // Fetch songs based on the search query
        const fetchSongs = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/get_songs/?search_update=${searchQuery}`);
                const data = await response.json();
                console.log(data);
                setFilteredSongs(data.songs);
            } catch (error) {
                console.error("Something has gone wrong with filtering songs:", error);
            }
        };
        // Fetch artists based on the search query
        const fetchArtists = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/get_artist/?search_update=${searchQuery}`);
                const data = await response.json();
                console.log(data);
                setFilteredArtists(data.artists);
            } catch (error) {
                console.error("Something has gone wrong with filtering artists:", error);
            }
        };
        // Fetch albums based on the search query
        const fetchAlbums = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/get_albums/?search_update=${searchQuery}`);
                const data = await response.json();
                console.log(data);
                setFilteredAlbums(data.albums);
            } catch (error) {
                console.error("Something has gone wrong with filtering songs:", error);
            }
        };
        fetchAlbums();
        fetchArtists();
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
            <h4>Artists</h4>
            <ul>
                {filteredArtists.filter(artist => artist.name.includes(searchQuery)).map((artist) => (
                    <li key={artist.name}>{artist.name}</li>
                ))}
            </ul>
            <h4>Albums</h4>
            <ul>
                {filteredAlbums.filter(album => album.title.includes(searchQuery)).map((album) => (
                    <li key={album.title}>{album.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Search;