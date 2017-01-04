import React from 'react';


class TypeInputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.state = {value: ''};
    }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.value !== undefined && nextProps.value !== this.state.value) {
            this.setState({ value: nextProps.value });
        }
    }

    handleInput(e) {
        if (this.props.updateInput != undefined) {
            this.props.updateInput(e.target.value);
        } else {
            this.setState({value: e.target.value});
        }
    }

    render() {
        return (
            <input type="text" value={this.state.value} style={this.props.style}
                   onChange={this.handleInput} placeholder={this.props.placeholder} onFocus={this.props.onFocus}/>
        );
    }
}

class SearchComponent extends TypeInputComponent {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
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


