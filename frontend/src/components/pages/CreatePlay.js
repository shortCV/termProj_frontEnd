import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar'
import { Link } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs'

const CreatePlay = () => {

    const [songs, setSongs] = useState([]);
    const [playlistTitle, setPlaylistTitle] = useState(''); // State to track the playlist title

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

    const handleTitleChange = (event) => {
        setPlaylistTitle(event.target.value);
    };

    return(
        <div>
            <Navbar/>
            <div className="Gradient-less ">
                <div className="p-1" >
                    <Breadcrumbs></Breadcrumbs>
                </div>
                <h1 className="p-4 text-center " style={{color: "white"}}>Create Playlist</h1>
                <hr style={{color: "lightblue"}}/>
            </div>
            <div className="Gradient" >
                <br/><br/><br/><br/><br/>
                <form>
                    <div className="position-absolute start-50 translate-middle">
                        <h4  style={{color: "white"}}>Playlist Name</h4>
                        <input type="text" className="form-control p-2" name="playTitle" placeholder="playlist title" value={playlistTitle} onChange={handleTitleChange}/>
                        <div>
                            <br/>
                            <select className="form-select" aria-label="Default select example" multiple size="10">
                                {songs.map((song) => (
                                    <option value={song} className="list-group-item list-group-item-action list-group-item-dark" key={song.title}>{song.title} by {song.artist.join(', ')}</option>
                                ))}
                            </select>
                            <div className="col-md-12 text-center p-2">
                                {playlistTitle.trim() ? (
                                    <Link to={`/`}>
                                        <button className="btn btn-primary">
                                            Create
                                        </button>
                                    </Link>
                                ) : (
                                    <button className="btn btn-primary" disabled>
                                        Create
                                    </button>
                                )}
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
export default CreatePlay;