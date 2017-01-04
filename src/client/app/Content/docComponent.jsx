import React from 'react';

const boxStyle = {
    width: 400,
    margin: '40px auto 0'
}

const formStyle = {
    margin: 10
}

class DocComponent extends React.Component {
    render() {
        return (
            <div style={boxStyle}>
                <SingleDocComponent name="客服工作流程" url="http://54.223.65.44:8100/static/file/ibd/xianhuo.csv"/>
                <SingleDocComponent name="打单流程" url="http://54.223.65.44:8100/static/file/ibd/xianhuo.csv"/>
                <SingleDocComponent name="上现货" url="http://54.223.65.44:8100/static/file/ibd/xianhuo.csv"/>
            </div>
        );
    }
}

class SingleDocComponent extends React.Component {
    render() {
        return (
            <form method="get" action={this.props.url} style={formStyle}>
                {this.props.name}
                <button type="submit" style={{marginLeft: 8}}>下载</button>
            </form>
        );
    }
}

export {DocComponent};