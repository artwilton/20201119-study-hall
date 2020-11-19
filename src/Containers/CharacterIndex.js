import React from 'react';
import CharacterCard from '../Components/CharacterCard';

class CharacterIndex extends React.Component {
    
    renderCards = () => {
        return this.props.characters.map(character => <CharacterCard name={character.name} img={character.img} show={character.name}/>)
    }

    testCards = () => {
        return <CharacterCard/>
    }

    render () {
        // console.log(this.props.characters)

        return(
            <div>
                <h2>Character Index</h2>
                {this.renderCards()}
            </div>
        )
    }


}

export default CharacterIndex