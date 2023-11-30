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

            <p>Tempor nec feugiat nisl pretium. Lectus sit amet est placerat. Quisque non tellus orci ac auctor augue. Commodo odio aenean sed adipiscing. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Diam volutpat commodo sed egestas egestas. Orci a scelerisque purus semper eget duis at tellus. Eu ultrices vitae auctor eu augue ut lectus. Phasellus faucibus scelerisque eleifend donec pretium.</p>

            <p>Fusce ut placerat orci nulla pellentesque dignissim. Blandit turpis cursus in hac habitasse platea dictumst. Duis ultricies lacus sed turpis tincidunt id aliquet risus. Proin gravida hendrerit lectus a. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Augue interdum velit euismod in pellentesque massa placerat duis. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. In arcu cursus euismod quis viverra nibh cras pulvinar. Eu tincidunt tortor aliquam nulla facilisi cras. Neque volutpat ac tincidunt vitae semper. Urna porttitor rhoncus dolor purus non enim praesent elementum. Fames ac turpis egestas sed tempus urna et pharetra. </p>

            <p>Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Senectus et netus et malesuada fames ac turpis egestas sed. Cursus turpis massa tincidunt dui ut. Mi tempus imperdiet nulla malesuada pellentesque elit. Massa sed elementum tempus egestas. Eget sit amet tellus cras adipiscing enim. Consequat interdum varius sit amet mattis. Neque laoreet suspendisse interdum consectetur libero. Eros donec ac odio tempor orci. Id velit ut tortor pretium viverra suspendisse potenti nullam.</p>

            <p>Vel pharetra vel turpis nunc eget lorem dolor sed. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Gravida rutrum quisque non tellus orci ac. Enim neque volutpat ac tincidunt vitae semper quis. Consequat interdum varius sit amet. Massa tempor nec feugiat nisl. Commodo ullamcorper a lacus vestibulum sed. Duis convallis convallis tellus id. Aliquam etiam erat velit scelerisque. Vivamus arcu felis bibendum ut. In nibh mauris cursus mattis molestie. Gravida cum sociis natoque penatibus et. Nunc consequat interdum varius sit. Cursus in hac habitasse platea dictumst quisque sagittis purus. Lobortis mattis aliquam faucibus purus in massa tempor. Nunc mi ipsum faucibus vitae aliquet.</p>
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
