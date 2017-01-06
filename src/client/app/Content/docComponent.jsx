import React from 'react';

const boxStyle = {
    width: 400,
    margin: '40px auto 0',
    borderCollapse: 'collapse',
    borderStyle: 'hidden'
}

const formStyle = {
    margin: 10
};

const tdStyle = {
    textAlign: 'center',
    padding: 5
};

const thStyle = {
    textAlign: 'center',
    padding: 5,
};

class DocComponent extends React.Component {
    render() {
        return (
            <table style={boxStyle}>
                <tr>
                    <th style={thStyle}>
                        文档名称
                    </th>
                    <th style={thStyle}>
                        版本号
                    </th>
                    <th style={thStyle}>
                        下载
                    </th>
                </tr>
                <tbody>
                    <SingleDocComponent name="客服备注流程" date="1.2" url="http://54.223.65.44:8100/static/file/ibd/kefu_note.pdf"/>
                    <SingleDocComponent name="打单流程" date=" " url="http://54.223.65.44:8100/static/file/ibd/xianhuo.csv"/>
                    <SingleDocComponent name="上现货" date=" " url="http://54.223.65.44:8100/static/file/ibd/xianhuo.csv"/>
                </tbody>
            </table>
        );
    }
}


class SingleDocComponent extends React.Component {
    render() {
        return (
            <tr>
                <td style={tdStyle}>
                    {this.props.name}
                </td>
                <td style={tdStyle}>
                    {this.props.date}
                </td>
                <td style={tdStyle}>
                    <form method="get" action={this.props.url}>
                        <button type="submit">
                            下载
                        </button>
                    </form>
                </td>
            </tr>

        );
    }
}

export {DocComponent};