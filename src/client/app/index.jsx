import React from 'react';
import {render} from 'react-dom';
import TitleBar from './TitleBar.jsx';
import ReserveComponent from './Content/ReserveComponent.jsx';
import {appStyle} from './Style/AppStyle.js'
import {NewOrderComponent} from './Content/NewOrderComponent.jsx'
import {DocComponent} from './Content/docComponent.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedTab: "预留查询"};
        this.tabClicked = this.tabClicked.bind(this);
    }

    tabClicked(name) {
        this.setState({selectedTab: name});
    }

  render () {
        const tab = this.state.selectedTab;
        if (tab == '预留查询') {
            return (
                <div style={appStyle}>
                    <TitleBar tabClicked={this.tabClicked}/>
                    <ReserveComponent/>
                </div>
            );
        } else if (tab == '下单') {
            return (
                <div style={appStyle}>
                    <TitleBar tabClicked={this.tabClicked}/>
                    <NewOrderComponent/>
                </div>
            );
        } else {
            return (
                <div style={appStyle}>
                    <TitleBar tabClicked={this.tabClicked}/>
                    <DocComponent/>
                </div>
            );
        }
  }
}

render(<App/>, document.getElementById('app'));

