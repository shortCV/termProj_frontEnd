import './App.css';
import {Component} from "react";

//Navigation
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {NavDropdown} from "react-bootstrap";

//icons
import Radio from './icons/radio-solid.svg'


class App extends Component {
  // Constructor method is called when a new instance is created
  constructor(props) {
    super(props);
    this.state = {
      myText: 'this is something that is stored in my application state',
      disabled: false
    }
  }
  handleClick(){
    console.log("Hello World")
    this.setState({disabled: !this.state.disabled})
  }
  hello(){
    console.log("hi")
  }

  // This is called automatically
  render() {
    return (
        <section>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">
                {/*icon: https://fontawesome.com/icons/radio?f=classic&s=solid
                display: https://blog.logrocket.com/how-to-use-svgs-react/#using-img-tag
                how to use comments in render: https://wesbos.com/react-jsx-comments*/}
                <img src={Radio} width="30" height="30" alt=""  className="d-inline-block align-top"/>{' '}
                Thump
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
          <div>

          </div>
          <article>
            <h1>Hello World!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi. Viverra aliquet eget sit amet. Eget dolor morbi non arcu. Auctor elit sed vulputate mi sit amet. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Sit amet volutpat consequat mauris nunc congue nisi. Ullamcorper eget nulla facilisi etiam dignissim. Massa enim nec dui nunc mattis enim ut tellus elementum. Vel pretium lectus quam id.</p>
            <button type="button" className="btn btn-outline-success">Comment</button>
          </article>
        </section>
    )
  }
}
/*
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
