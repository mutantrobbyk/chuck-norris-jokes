import React from "react";
import "./App.css";
import axios from 'axios'
import Jokes from './components/Jokes'

class App extends React.Component {
  state = {
    jokes: [],
    joke: ''
  }
  componentDidMount(){
    this.getJokes()
  }
  handleInput = e => {
    this.setState({
      joke: e.target.value
    })
  }
  getJokes = async () => {
    await axios.get(`/api/jokes`).then(res => {
      console.log(res.data)
      this.setState({
        jokes: res.data
      })
    })
  }
  getSpecific = (id) => {
    axios.get(`/api/jokes/specific?id=${id}`).then(res => {
      this.setState({
        jokes: res.data
      })
    })
  }
  deleteJoke = (id) => {
    axios.delete(`/api/jokes/${id}`).then(res => {
      this.setState({
        jokes: res.data
      })
    })
  }
  updateJoke = async (id) => {
    await axios.put(`/api/jokes/${id}`,{joke: this.state.joke}).then(res => {
      this.setState({
        jokes: res.data
      })
    })
  }
  render() {
    console.log(this.state.joke)
    let jokes = this.state.jokes.map(el => (
      <Jokes update={this.updateJoke} input={this.handleInput} deleteJoke={this.deleteJoke} getSpecific={this.getSpecific} data={el}/>
    ))
    return <div className="App">
      {this.state.jokes.length ? jokes : <h1>Waiting for Awesome Jokes</h1>}
    </div>;
  }
}

export default App;
