import React from 'react';
import characters from "../api";
import CharacterCard from '../Components/CharacterCard';
import NewCharacterForm from '../Components/NewCharacterForm'
import FilterCharacterForm from '../Components/FilterCharacterForm.js'

class CharacterIndex extends React.Component {

    state = {
        characters: characters,
        search: ""

      }
    
    renderCards = () => {
        let filterResults = this.state.characters.filter(el => el.name.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase()))
        return filterResults.map(character => <CharacterCard name={character.name} img={character.img} show={character.name}/>)
    }

    submitHandler = (event, characterObj) => {
       this.setState({characters: [characterObj, ...this.state.characters]})
      }

    searchChangeHandler = (event) => {
        this.setState({search: event.target.value})
    }


    render () {

        return(
            <div>
                <NewCharacterForm submitHandler={this.submitHandler}/><br/>
                <FilterCharacterForm searchChangeHandler={this.searchChangeHandler} searchValue={this.state.search}/>
                <h2>Character Index</h2>
                {this.renderCards()}
            </div>
        )
    }


}

export default CharacterIndex