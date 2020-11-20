import React from 'react'

class NewCharacterForm extends React.Component {

    state = {
        name: "",
        img: ""
    }

    formChangeHandler = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    localSubmitHandler = (event, characterObj) => {
        event.preventDefault()
        this.props.submitHandler(event, characterObj)
        this.setState({
            name: "",
            img: ""
        })
    }

    render() {
        return (
            <form onSubmit={(event) => this.localSubmitHandler(event, this.state)}>
                <div>
                    <label>
                        Name
                        <input onChange={this.formChangeHandler} name="name" type="text" value={this.state.name}/>
                    </label>
                </div>
                <div>
                    <label>
                        Image
                        <input onChange={this.formChangeHandler} name="img" type="text" value={this.state.img}/>
                    </label>
                </div>
                <div>
                    <button type="submit">Create New Character</button>
                </div>
            </form>
        )
    }

}

export default NewCharacterForm