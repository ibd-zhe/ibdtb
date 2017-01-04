import React from 'react';
import {stringBgColor, inputGoodColor} from '../Style/AppStyle.js';

const unitBoxStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 15,
    height: 30
};

const valueBoxStyle = {
    marginLeft: 10,
    borderRadius: 4,
    overflow: 'hidden',
    height: '100%',
    background: stringBgColor,
    paddingLeft: 5
};

const subsubStyle = {
    display: 'inline-block',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0)'
};

const labelStyle = {
    width: 70
};

// key value pair for user input, prop value (type, value(if select or datalist), keyname)

class UnitInputCmp extends React.Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.valueTag = this.valueTag.bind(this);
        this.state = {good: 'normal', value: null};
    }

    // calls when form submit, can be used to indicate wrong element
    submit() {
        if (this.state.good === 'good') {
            return {
                response: {
                    key: this.props.info.name,
                    value: this.state.value
                },
                ready: true
            };
        } else {
            this.state.good = 'watch';
            return {
                ready: false
            };
        }
    }

    handleChange(e) {
        const aa = e.target.value;
        this.state.value = aa;
        e.target.size = aa.length + 10;
        if ((e.target.type === 'text' && e.target.list === null) || e.target.type === 'date') {
            if (aa !== '') {
                this.state.good = 'good';
            } else {
                this.state.good = 'normal';
            }
        } else if (e.target.type === 'number') {
            if (aa > 0) {
                this.state.good = 'good';
            } else {
                this.state.good = 'normal';
            }

            // datalist type
        } else {
            if (this.props.info.value.includes(aa)) {
                this.state.good = 'good';
            } else {
                this.state.good = 'normal';
            }
        }
    }

    valueTag(style) {

        if (this.props.info.type == 'text') {
            return (
                <label style={labelStyle}>
                    {this.props.info.name}
                    <input type="text" style={style} onChange={this.handleChange}/>
                </label>

            );

        } else if (this.props.info.type == 'date') {
            return (
                <label style={labelStyle}>
                    {this.props.info.name}
                    <input type="date" style={style} onChange={this.handleChange} max="2017-12-31" min="2015-12-31"/>
                </label>
            );

        } else if (this.props.info.type == 'money') {
            return (
                <label style={labelStyle}>
                    {this.props.info.name}
                    <input type="number" onChange={this.handleChange} style={subsubStyle}/>
                    <select style={subsubStyle}>
                        <option>usd</option>
                        <option>cny</option>
                    </select>
                </label>
            );
        } else if (this.props.info.type == 'datalist') {
            return (
                <label style={labelStyle}>
                    {this.props.info.name}
                    <input list={this.props.info.name} onChange={this.handleChange} style={{height: '100%',backgroundColor: 'rgba(0,0,0,0)'}}/>
                    <datalist id={this.props.info.name}>
                        {this.props.info.value.map((name) =>
                            <option value={name}/>
                        )}
                    </datalist>
                </label>
            );
        }
    }

    render() {
        let ss = valueBoxStyle;
        if (this.state.good === 'good') {
            ss.background = inputGoodColor;
        } else if (this.state.good === 'normal') {
            ss.background = stringBgColor;
        } else if (this.state.good === 'watch') {
            ss.background = 'red'
        }

        return (

            <div style={unitBoxStyle}>
                {this.valueTag(ss)}
            </div>
        );
    }
}

export {UnitInputCmp};