import React from 'react'

class FilterCharacterForm extends React.Component {

    render() {

        return (
            <form>
                <input onChange={(e)=> this.props.searchChangeHandler(e)} type="text" placeholder="Filter Characters" value={this.props.searchValue}/>
            </form>
        )
    }

}

export default FilterCharacterForm