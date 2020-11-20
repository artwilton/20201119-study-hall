import React from 'react';
import './App.css';
import CharacterIndex from './Containers/CharacterIndex'

class App extends React.Component {

  state = {
    search: ""
  }

  render() {
    
    return (
      <div className="App">
        <CharacterIndex/>
      </div>
    );
  }

}

export default App;
