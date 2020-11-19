import React from 'react';
import characters from "../api";
import CharacterCard from '../Components/CharacterCard';
import NewCharacterForm from '../Components/NewCharacterForm'

class CharacterIndex extends React.Component {

    state = {
        characters
      }
    
    renderCards = () => {
        return this.state.characters.map(character => <CharacterCard name={character.name} img={character.img} show={character.name}/>)
    }

    submitHandler = event => {
        let newCharacters = [...this.state.characters]
        newCharacters.unshift({name: event.target.name.value, img: event.target.img.value})
        this.setState({characters: newCharacters}, console.log(newCharacters))
      }

    testCards = () => {
        return <CharacterCard/>
    }

    render () {
        // console.log(this.props.characters)

        return(
            <div>
                <NewCharacterForm submitHandler={this.submitHandler}/>
                <h2>Character Index</h2>
                {this.renderCards()}
            </div>
        )
    }


}

export default CharacterIndex