import React from 'react';

const searchBarStyle = {
    width: 100,
    height: 50,
};

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
        console.log('fuck');
        e.preventDefault();
        this.props.search(this.state.value);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input style={searchBarStyle} type="search" value={this.state.value} onChange={this.handleInput} placeholder="请输入用户名" />
                    <input type="submit" value="search"/>
                </form>
            </div>
        );
    }
}


export default SearchComponent;


