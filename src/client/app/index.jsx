import React from 'react';
import {render} from 'react-dom';
import TitleBar from './TitleBar.jsx';
import ReserveComponent from './ReserveComponent/ReserveComponent.jsx';
import {appStyle} from './Style/AppStyle.js'


class App extends React.Component {
  render () {
    return (
        <div style={appStyle}>
            <TitleBar/>
            <ReserveComponent/>
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));

