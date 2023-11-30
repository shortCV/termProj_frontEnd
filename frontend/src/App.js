import logo from './logo.svg';
import './App.css';
import {Component} from "react";

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
        <section className="col-sm-11 col-md-8 col-lg-6">
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
