import React from 'react';
import {stringBgColor} from '../Style/AppStyle.js'

const searchBoxStyle = {
    formStyle: {
        margin: '20px auto 20px',
        width: 250,
        height: 30,
        borderRadius: 5,
        backgroundColor: stringBgColor
    },
    inputStyle: {
        fontSize: 16,
        textAlign: 'center',
        borderStyle: 'none',
        width: '100%',
        height: '100%',
        borderRadius: 5,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color: ''
    }
};

class TypeInputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {value: ''};
    }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.value !== undefined && nextProps.value !== this.state.value) {
            this.setState({ value: nextProps.value });
        }
    }

    handleInput(e) {
        if (this.props.ACSearch != undefined) {
            this.props.ACSearch(e.target.value);
        } else {
            this.setState({value: e.target.value});
        }
    }


    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={searchBoxStyle.formStyle}>
                <input type="text" value={this.state.value} style={searchBoxStyle.inputStyle}
                       onChange={this.handleInput} placeholder={this.props.placeholder}/>
            </form>
        );
    }
}

class SearchComponent extends TypeInputComponent {
    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        super.handleSubmit(e);
        this.props.search(this.state.value);
    }

    render() {
        return (
                <form onSubmit={this.handleSubmit} style={this.props.style.formStyle}>
                    <input style={this.props.style.inputStyle} type="text" value={this.state.value}
                           onChange={this.handleInput} placeholder={this.props.placeholder}/>
                    <input type="image" src={this.props.style.submitStyle.imgUrl} style={this.props.style.submitStyle}/>
                </form>
        );
    }
}

export {SearchComponent, TypeInputComponent};


