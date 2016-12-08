import React from 'react';

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.search(this.state.value);
    }

    render() {
        return (
                <form onSubmit={this.handleSubmit} style={this.props.style.formStyle}>
                    <input style={this.props.style.inputStyle} type="text" value={this.state.value}
                           onChange={this.handleInput}
                           placeholder={this.props.placeholder}/>
                    <input type="image" src={this.props.style.submitStyle.imgUrl} style={this.props.style.submitStyle}/>
                </form>
        );
    }
}


export default SearchComponent;


