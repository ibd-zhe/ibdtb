import React from 'react';

const title = "爱买丢";
const tabnames = ["预留查询", "上现货"];

const titleBarStyle = {
    height: 60,
    //backgroundColor: 'black',
    //color: 'white',
    position: 'absolute',
    top:0,
    left:0,
    width: '100%'
};

const titleStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: 50
};

const tabBarStyle = {
    position: 'absolute',
    left: 500,
};

class TitleBar extends React.Component {
    render() {
        return (
        <div>
            <div>{title}</div>
            <TabBar tabnames={tabnames}/>
        </div>
        );
    }
}

class TabBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {activeTab : 0};
  }

  tabs() {
      return this.props.tabnames.map(
          (name1) => <Tab name={name1} key={name1}/>
      );
  }

  render() {
    return (
      <div style={this.props.style}>
            {this.tabs()}
      </div>
    );
  }
}

class Tab extends React.Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}

export default TitleBar;

