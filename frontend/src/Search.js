import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar'


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
            <Navbar/>
            <div className="Gradient-less">
                <h1 className="p-2 text-center " style={{color: "white"}}>Search</h1>
                <h4 className="p-4 text-center " style={{color: "white"}}>Results for:</h4>
                <hr style={{color: "lightblue"}}/>
                <h1 className="p-2 text-center " style={{color: "lightblue"}}>{searchQuery} </h1>
                <hr style={{color: "lightblue"}}/>
            </div>
            <div className="Gradient">
                <h4 className=" p-2 text-center " style={{color: "white"}}>Songs</h4>
                <ul className=" p-2 text-center " style={{color: "white"}}>
                    {filteredSongs.filter(song => song.title.includes(searchQuery)).map((song) => (
                        <li key={song.title}>{song.title} by {song.artist.join(', ')}</li>
                    ))}
                </ul>
                <h4 className=" p-2 text-center " style={{color: "white"}}>Artists</h4>
                <ul className=" p-2 text-center " style={{color: "white"}}>
                    {filteredArtists.filter(artist => artist.name.includes(searchQuery)).map((artist) => (
                        <li key={artist.name}>{artist.name}</li>
                    ))}
                </ul>
                <h4 className=" p-2 text-center " style={{color: "white"}}>Albums</h4>
                <ul className="p-2 text-center " style={{color: "white"}}>
                    {filteredAlbums.filter(album => album.title.includes(searchQuery)).map((album) => (
                        <li key={album.title}>{album.title}</li>
                    ))}
                </ul>
            </div>

            <div className="Gradient">
            </div>

        </div>
    );
};

export default Search;