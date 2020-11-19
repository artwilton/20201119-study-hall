import React from 'react';
import './App.css';
import characters from "./api";
import CharacterIndex from './Containers/CharacterIndex'
import NewCharacterForm from './Containers/NewCharacterForm'

class App extends React.Component {

  state = {
    characters
  }

  submitHandler = event => {
    let newCharacters = [...this.state.characters]
    newCharacters.push({name: event.target.name.value, img: event.target.img.value})
    this.setState({characters: newCharacters}, console.log(newCharacters))
  }

  render() {
    
    return (
      <div className="App">
        <NewCharacterForm submitHandler={this.submitHandler}/>
        <CharacterIndex characters={this.state.characters}/>
      </div>
    );
  }

}

export default App;
