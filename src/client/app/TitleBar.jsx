import React from 'react';
import {titleBarStyle, tabBarStyle, titleStyle, tabStyle} from './Style/AppStyle.js'

const title = "爱买丢";
const tabnames = ["预留查询", "文档", "下单"];

class TitleBar extends React.Component {

    render() {
        return (
        <div style={titleBarStyle}>
            <div style={titleStyle}>{title}</div>
            <TabBar tabnames={tabnames} tabClicked={this.props.tabClicked}/>
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
          (name1) => <Tab name={name1} key={name1} tabClicked={this.props.tabClicked}/>
      );
  }

  render() {
    return (
        <table style={tabBarStyle}>
            <tbody>
            <tr>
                {this.tabs()}
            </tr>
            </tbody>
        </table>
    );
  }
}

class Tab extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.tabClicked(this.props.name);
    }

    render() {
        return (
            <td style={tabStyle} onClick={this.handleClick}>
                {this.props.name}
            </td>
        );
    }
}

export default TitleBar;

