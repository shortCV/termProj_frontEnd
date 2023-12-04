import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import { Link, useLocation } from 'react-router-dom';

const SongDisplay = () => {

    const [songs, setSongs] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/api/get_songs/");
                const data = await response.json();
                setSongs(data.songs);
            } catch (error) {
                console.error("Something went wrong with fetching songs:", error);
            }
        };

        fetchSongs();
    }, []);

    return(
        <div>
            <Navbar/>
            <div className="Gradient-less ">
                <h1 className="p-4 text-center " style={{color: "white"}}>Song Name</h1>
                <hr style={{color: "lightblue"}}/>
            </div>
            <div className="Gradient" >
                <br/><br/><br/>
                <form>
                    <div className="position-absolute start-50 translate-middle">
                        <h4  style={{color: "white"}}>Playlist Name</h4>
                        <input type="text" className="form-control p-2" name="" placeholder="playlist title" />
                        <div>
                            <br/>
                            <ul className="p-2 text-center list-group-flush " style={{ color: "white", maxHeight: "300px", overflowY: "auto"  }}>
                                {songs.map((song) => (
                                    <li className="list-group-item list-group-item-action list-group-item-dark" key={song.title}>{song.title} by {song.artist.join(', ')}</li>
                                ))}
                            </ul>
                            <div className="col-md-12 text-center p-2">
                                <Link to={`/`}>
                                    <button className="btn btn-primary">
                                        Create
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div className="bg-dark">
                <div className="d-flex justify-content-center text-center">
                    <h5 className="p-4 bold-text" style={{color: "lightsteelblue"}}>About</h5>
                    <h5 className="p-4 bold-text" style={{color: "lightsteelblue"}}>Help</h5>
                    <h5 className="p-4 bold-text" style={{color: "lightsteelblue"}}>FAQ</h5>
                    <h5 className="p-4 bold-text" style={{color: "lightsteelblue"}}>Top 10</h5>
                    <h5 className="p-4 bold-text" style={{color: "lightsteelblue"}}>Socials</h5>
                </div>
            </div>
        </div>
    )
}
export default SongDisplay;