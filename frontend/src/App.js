import './App.css';
import {Component} from "react";
import {Link, useNavigate} from 'react-router-dom';
import Navbard from './components/Navbar'
import LikeButton from './components/Like'
import { logout } from './services/apiService';
import placeHold from './components/images/placeholder-image-dark.jpg'
import { Tooltip } from 'react-tooltip'

// hover element: https://react-tooltip.com/docs/getting-started
class App extends Component {

  // Constructor method is called when a new instance is created
  constructor(props) {
    super(props);
    this.state = {
        myText: 'this is something that is stored in my application state',
        disabled: false,
        songs: [],
        reviews: [],
        playlists: [],
        searchInput: "",
        isAuthenticated: false,
        loading: true,
        intendedPage: '/',
    }
  }

  //meant for log out (set Auth. to not Authenticate)
    handleLogout = () => {
        // Call API service to log out
        logout().then(() => {
            this.setState({ isAuthenticated: false });
        });
    };

  //fetching
  componentDidMount() {

      //fetch song data
        fetch("http://127.0.0.1:8000/api/get_songs/")
            .then(response => response.json())
            .then(data => {
                //if communication went well
              this.setState({ songs: data });
                console.log("Song Data:", data);
            })
                //if error
            .catch(error => {
              console.error("Error fetching songs:", error);
            });

        //fetch review data
        fetch("http://127.0.0.1:8000/api/get_reviews/")
            .then(response => {
              if (!response.ok) {
                throw new Error(`Something has gone wrong. Status: ${response.status}`);
              }
              return response.json();
            })
            .then(data => {
              console.log("Reviews data:", data);
              this.setState({ reviews: data.reviews });
            })
            .catch(error => {
              console.error("Error fetching reviews:", error);
            });

        //fetch playlist data
        fetch("http://127.0.0.1:8000/api/get_playlist/")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Something has gone wrong. Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Playlist data:", data);
                this.setState({ playlists: data });
            })
            .catch(error => {
                console.error("Error fetching playlists:", error);
            });

        //loading...
        this.setState({ loading: false });

        //fetch authentication (not implemented well)
        fetch('http://127.0.01:8000/authInto/')
            .then(response => {
                 if(!response.ok){
                     console.log("this is an error with authentication but I have to show logged in screen")
                   this.setState({loading:false, isAuthenticated: true});
                   console.log("Woah, you did it", this.state.loading);
                }
             })
  }


  // This is called automatically
  render() {
      // consts
      const { songs } = this.state;
      const { reviews } = this.state;
      const { searchInput } = this.state;
      const { playlists } = this.state;
      // State to manage the search input
      const { isAuthenticated, loading } = this.state;

      //attempt at loading
      if (loading) {
          return <div >Loading...</div>;
      }

      // screen render
    return (
            <div>
                {/* top / search section */}
                <div>
                    {/* nav bar */}
                    {/* calling nav bar component */}
                    <Navbard isAuthenticated={this.state.isAuthenticated} onLogout={this.handleLogout}></Navbard>
                </div>
                {/* search */}
                <div className="d-flex justify-content-center Gradient">
                    <div id="image-container"></div>
                    <div className="position-absolute top-50 start-50 translate-middle ">
                        <h1 className="text-center " style={{color: "white"}}>What Have You Been Listening To? </h1>
                        <input type="text" className="search container-fluid" name="search_bar" placeholder="search song, album, artist..." value={searchInput} onChange={(e) => this.setState({ searchInput: e.target.value })} />
                        <div className="col-md-12 text-center p-2">
                            {/* like to search result page, you return search result and query name in the url */}
                            <Link to={`/search?q=${searchInput}`}>
                                <button className="btn btn-primary" data-tooltip-id="my-submit" data-tooltip-content="Submit to search" data-tooltip-place="bottom">
                                    Search
                                </button>
                                {/* hover tip on submit */}
                                <Tooltip id="my-submit"/>
                            </Link>
                        </div>

                    </div>
                </div>
                {/* song section */}
                <div className="Gradient">
                    <div>
                        <h1 className="p-lg-5 container-fluid" style={{color: "white"}}>New Releases</h1>
                        {/* Display Songs */}
                        <div>
                            <div className="justify-content-center text-center row">
                                {/* loop through songs within the range */}
                                {songs.slice(23, 27).map((song, index) => (
                                    <div key={index} style={{ color: 'white' }} className="p-lg-5 col">
                                        <div className="bold-text">
                                            {song.title}
                                        </div>
                                        <br/>
                                        <div>
                                            <img src={song.cover_url} height="220px" width="100% \9" className="p-2 img-fluid" alt={song.title}/>
                                        </div>

                                        <br/>
                                        by {song.artist.join(', ')}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* review section */}
                <div className="Gradient">
                    <div>
                        <br/>
                        <h1 className="p-lg-5 container-fluid" style={{color: "white"}}>Popular Reviews</h1>
                        <div>
                            <div className="justify-content-center text-center row">
                                {/* loop through reviews within the range */}
                                {reviews.slice(3, 7).map((review, index) => (
                                    <div key={index} style={{ color: 'white' }} className="p-lg-5 col">
                                        <div className="bold-text justify-content-center text-center">
                                            {review.song.title}
                                        </div>
                                        {review.song.artist}
                                        <img src={placeHold} height="220px" width="220px" className="p-2 img-fluid" alt={review.title}/>
                                        <br/>
                                        {review.title} - {review.user}
                                        <br/>
                                        <hr/>
                                        Rating: {review.rating}/10
                                        <hr/>
                                        {review.text}
                                        <br/><br/>
                                        {/* like button (does not communicate with the backend) */}
                                        <div className="col-sm-12 col-md-12" data-tooltip-id="my-like" data-tooltip-content="Press to like / unlike" data-tooltip-place="bottom">
                                            <LikeButton reviewId={review.id} initialLikes={review.likes} isAuthenticated={isAuthenticated}  />
                                            {/* hover tip on like button */}
                                            <Tooltip id="my-like"/>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* playlist section */}
                <div className="Gradient">
                    <div>
                        <br/><br/> <br/><br/> <br/><br/> <br/><br/>
                        <h1 className="p-lg-5" style={{color: "white"}}><br/>Popular Playlists</h1>
                        <div>
                            <div className="justify-content-center text-center row">
                                {/* loop through all playlist options */}
                                {playlists.map((playlist, index) =>(
                                    <div key={index}  className="p-lg-5 col-3">
                                        <div className="bold-text" style={{ color: 'white' }}>
                                            {playlist.title}
                                        </div>
                                        <hr style={{ color: 'white' }}/>
                                        <img src={playlist.cover_url} height="220px" width="220px" className="p-2 img-fluid " alt={playlist.title}/>
                                        <hr/>
                                        {/* display songs */}
                                        <ul data-tooltip-id="my-song-display" data-tooltip-content="Playlist songs - click on songs" data-tooltip-place="bottom" className="list-group list-group-flush list-group-item-action container-fluid" style={{ color: 'darkgray' }}>
                                            {/* link songs to pages dedicated to song */}
                                            {playlist.song.slice(0,3).map((song, songIndex) => (
                                                <Link to={`song_display?songs=${encodeURIComponent(song)}`} key={songIndex} className="list-group-item list-group-item-action list-group-item-dark row-cols-auto">
                                                    {song}
                                                </Link>
                                            ))}
                                            {/* hover tip on songs to say you can click on it */}
                                            <Tooltip id="my-song-display"/>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* spacing */}
                <div className="Gradient">
                    <div>
                        <br/><br/> <br/><br/> <br/><br/> <br/><br/><br/>
                    </div>
                </div>
                {/* footer */}
                <article className="bg-dark">
                    <div className="d-flex justify-content-center text-center">
                        <h5 className="p-4 bold-text" style={{color: "lightsteelblue"}}>About</h5>
                        <h5 className="p-4 bold-text" style={{color: "lightsteelblue"}}>Help</h5>
                        <h5 className="p-4 bold-text" style={{color: "lightsteelblue"}}>FAQ</h5>
                        <h5 className="p-4 bold-text" style={{color: "lightsteelblue"}}>Top 10</h5>
                        <h5 className="p-4 bold-text" style={{color: "lightsteelblue"}}>Socials</h5>
                    </div>
                </article>
            </div>

    )
  }
    navigate = () => {
        // trying to navigate to home page for login that does not work
        const navigate = this.props.navigate || useNavigate();
        navigate('/');
    };
}

export default App;
