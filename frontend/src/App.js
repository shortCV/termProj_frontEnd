import './App.css';
import {Component, useState } from "react";
import {BrowserRouter as Router, Link, Route, Routes, Switch} from 'react-router-dom';

//Navigation
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {NavDropdown} from "react-bootstrap";

import Navbard from './components/Navbar'

//icons
import Radio from './icons/radio-solid.svg'
import Heart from './icons/heart-solid.svg'

//
import placeHold from './images/placeholder-image-dark.jpg'

//


//
import Playlist from './Playlist';
//import NotFound from './NotFound';

class App extends Component {
  // Constructor method is called when a new instance is created
  constructor(props) {
    super(props);
    this.state = {
      myText: 'this is something that is stored in my application state',
      disabled: false,
      songs: [],
      reviews: [],
    }
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/get_songs/")
        .then(response => response.json())
        .then(data => {
          this.setState({ songs: data.songs });
        })
        .catch(error => {
          console.error("Error fetching songs:", error);
        });

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
  }

  // This is called automatically
  render() {
    const { songs } = this.state;
    const { reviews } = this.state;
    return (
            <div>
                <div>
                    <Navbard></Navbard>
                </div>
                <div className="d-flex justify-content-center Gradient">
                    <div id="image-container"></div>
                    <div className="position-absolute top-50 start-50 translate-middle ">
                        <h1 className="text-center " style={{color: "white"}}>What Have You Been Listening To? </h1>
                        <input type="text" className="search" name="" placeholder="search song, album, artist..." />
                        <div className="col-md-12 text-center p-2">
                            <button className="btn btn-primary" onClick={this.handleSearch}>
                                Search
                            </button>
                        </div>

                    </div>
                </div>
                <article className="Gradient">
                    <div>
                        <br/>
                        <h1 className="p-lg-5" style={{color: "white"}}>New Releases</h1>
                        {/* Display Songs */}
                        <div>
                            <div className="d-flex justify-content-center text-center">
                                {songs.slice(23, 27).map((song, index) => (
                                    <div key={index} style={{ color: 'white' }} className="p-lg-5">
                                        {song.title}
                                        <br/>
                                        <img src={placeHold} height="220px" width="220px" className="p-2" alt={song.title}/>
                                        <br/>
                                        by {song.artist.join(', ')}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </article>
                <article className="Gradient">
                    <div>
                        <br/>
                        <h1 className="p-lg-5" style={{color: "white"}}>Popular Reviews</h1>
                        <div>
                            <div className="d-flex justify-content-center text-center">
                                {reviews.slice(3, 7).map((review, index) => (
                                    <div key={index} style={{ color: 'white' }} className="p-lg-5">
                                        <div className="bold-text justify-content-center text-center">
                                            {review.song.title}
                                        </div>
                                        {review.song.artist}
                                        <img src={placeHold} height="220px" width="220px" className="p-2" alt={review.title}/>
                                        <br/>
                                        {review.title} - {review.user}
                                        <br/>
                                        <hr/>
                                        Rating: {review.rating}/10
                                        <hr/>
                                        {review.text}
                                        <br/><br/>
                                        <h6 style={{ color: 'gray', fontSize: '15px'}}>
                                            <button type="button" className="btn-secondary">
                                                <img src={Heart} width="15" height="15" alt="Heart Logo"  className="d-inline-block"/>
                                            </button> like review | {review.likes}
                                        </h6>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </article>
                <article className="Gradient">

                </article>
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
}

/*


<img src={Heart} width="15" height="15" alt="Heart Logo"  className="d-inline-block"/>
///
<MDBCol md="12">
                <MDBInput hint="Search" type="text" containerClass="active-pink active-pink-2 mt-0 mb-3" />
              </MDBCol>
///
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
