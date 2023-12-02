import './App.css';
import {Component, useState } from "react";

//Navigation
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {NavDropdown} from "react-bootstrap";

//icons
import Radio from './icons/radio-solid.svg'

//
import PMBB from './images/PMBB_cover.jpeg'
import placeHold from './images/placeholder-image-dark.jpg'

//
import {Route, Link} from 'react-router-dom'

class App extends Component {
  // Constructor method is called when a new instance is created
  constructor(props) {
    super(props);
    this.state = {
      myText: 'this is something that is stored in my application state',
      disabled: false,
      songs: [],
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
  }

  // This is called automatically
  render() {
    const { songs } = this.state;
    return (
        <div>
          <div>
            <Navbar expand="lg" className="navbar navbar-dark bg-dark">
              <Container>
                <Navbar.Brand href="#home" className="navbar-brand mb-0 h1">
                  {/*icon: https://fontawesome.com/icons/radio?f=classic&s=solid
                display: https://blog.logrocket.com/how-to-use-svgs-react/#using-img-tag
                how to use comments in render: https://wesbos.com/react-jsx-comments*/}
                  <img src={Radio} width="40" height="40" alt="Radio Logo"  className="d-inline-block align-top"/>{' '}
                  THUMP
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Artist</Nav.Link>

                    <Nav.Link href="#link">Songs</Nav.Link>

                    <NavDropdown title="Playlists" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">My Playlists</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Saved Playlists</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Featured Playlists</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Create Playlist</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Nav className="justify-content-end">
                    <Nav.Link href="#link">Sign Up</Nav.Link>
                    <Nav.Link href="#link">Log in</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
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
                        <img src={placeHold} height="220px" width="220px" className="p-2" alt={song.title}/>
                        <br/>
                        {song.title} by {song.artist.join(', ')}
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
            </div>
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
