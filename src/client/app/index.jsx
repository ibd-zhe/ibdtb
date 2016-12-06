import React from 'react';
import {render} from 'react-dom';
import TitleBar from './TitleBar.jsx';
import ReserveComponent from './ReserveComponent/ReserveComponent.jsx';

let imgUrl = "http://54.223.65.44:8100/static/image/ibd/mb1";

const divStyle = {
    //backgroundImage: 'url(' + imgUrl + ')',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% auto',
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0
};

class App extends React.Component {
  render () {
    return (
        <div>
            <TitleBar/>
            <ReserveComponent/>
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));

