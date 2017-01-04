import React from 'react';
import ReactDOM from 'react-dom'
import {getSupplyInfo} from '../Model/IbdDb.js'
import {ProductInputComponent, ProductSearchResultComponent} from './ProductSearchComponent.jsx'
import {orderCmpStyle,orderInfoBoxStyle} from '../Style/StyleOrderInfo.js'
import {UnitInputCmp} from '../UIComponent/UnitInputCmp.jsx'
import {stringBgColor, inputGoodColor} from '../Style/AppStyle.js';

class NewOrderComponent extends React.Component {
    render() {
        return (
            <div style={orderCmpStyle}>
                <AddOrderInfoComponent/>
            </div>
        );
    }
}

// receiver {[ {name: , type:, value: }] } from server
class AddOrderInfoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputContent: [],
        };
        this.inputChildren = [];
        this.updateSelect = this.updateSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        getSupplyInfo(this.updateSelect);
    }

    updateSelect(content) {
        let infoJson = JSON.parse(content);
        this.setState(
            {inputContent: infoJson})
        ;
        let tt = {};
        for (let value of infoJson) {
            tt[value.name] = null;
        }
        this.setState(
            {inputValue: tt}
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        let rrjson = {};
        let doit;
        this.inputChildren.forEach(function (item, index, array) {
            let vv = item.submit();
            console.log(vv);
            if (index === 0) {
                doit = vv.ready;
            }
            if (doit === true) {
                doit = vv.ready;
                rrjson[vv.response.key] = vv.response.value;
            }
        });
    }

    render() {
        return (
            <form style={orderInfoBoxStyle} onSubmit={this.handleSubmit}>
                {this.state.inputContent.map((info) =>
                    <UnitInputCmp info={info} ref={(input) => {this.inputChildren.push(input)}}/>
                )}
                <ItemFillComponent ref={(input) => {this.inputChildren.push(input)}}/>
                <input type="submit"/>
            </form>
        );
    }
}

const itemTableStyle = {
    width: '100%',
    tableLayout: 'fixed',
    borderSpacing: 10,
    borderCollapse: 'separate'
};

class ItemFillComponent extends React.Component {
    constructor(props) {
        super(props);
        this.renderResult = this.renderResult.bind(this);
        this.itemClick = this.itemClick.bind(this);
        this.rowOnFocus = this.rowOnFocus.bind(this);
        this.testRow = this.testRow.bind(this);
        this.onRowChange = this.onRowChange.bind(this);
        this.state = {result: null,
                    items: [{itemName: '', num: '', px: '', locked: false, itemId: null}],
                    selectedItem: null
                    };
        this.handleClick = this.handleClick.bind(this);
    }

    submit() {

    }

    isNumber(n){
        return typeof(n) != "boolean" && !isNaN(n);
    }

    testItemSubmit(item) {
        if (item.itemId != null && item.num > 0 && this.isNumber(item.px) && item.px >= 0) {
            return true;
        } else {
            return false;
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClick, true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick, true);
    }

    handleClick(event) {
        const domNode = ReactDOM.findDOMNode(this);

        if ((!domNode.contains(event.target))) {
            this.setState({
                selectedItem : null,
                result: null
            });
        }
    }

    itemClick(item) {
        this.setState(function (prevState) {
            prevState.items[prevState.selectedItem].itemId = item.itemId;
            const bb = item.product.split(' ')
            const product = bb[bb.length - 1];
            const name = item.brand + ' ' + product + ' ' + item.itemName;
            prevState.items[prevState.selectedItem].itemName = name;
            prevState.items[prevState.selectedItem].locked = true;
            let aa = this.testRow(prevState.items);
            return {
                items: aa
            };
        });
    }

    renderResult(dbjson) {
        if (dbjson === null) {
            this.setState({result: null});
        } else {
            this.setState({result: <ProductSearchResultComponent content={dbjson} itemClick={this.itemClick}/>})
        }
    }

    rowOnFocus(index) {
        if (index != this.state.selectedItem) {
            this.setState({selectedItem: index});
        }
    }

    onRowChange(index, field, value) {
        this.setState(function (prevState) {
            prevState.items[index][field] = value;
            if (field === 'itemName') {
                prevState.items[index].locked = false;
            }
            let aa = this.testRow(prevState.items);
            return {
                items: aa
            };
        });
    }

    testRow(prevItems) {
        let emptyRow = [];
        let allgood = true;
        for (let index = 0; index < prevItems.length; index++) {
            let item = prevItems[index];
            if (item.itemName === '' || item.num === '' || item.px === '' || item.locked === false) {
                allgood = false;
            }
            if (item.itemName === '' && item.num === '' && item.px === '') {
                emptyRow.push(index);
            }
        }

        if (allgood === true) {
            prevItems.push({itemName: '', num: '', px: '', locked: false, itemId:null});
            return prevItems;
        }

        if (emptyRow.length > 1) {
            prevItems.splice(emptyRow[0], 1);
            return prevItems;
        }
        return prevItems;
    }

    render() {
        return (
            <div style={{width: '100%'}}>
                <label>
                    商品信息
                </label>
                <table style={itemTableStyle}>
                    <tr>
                        <th>
                            商品id
                        </th>
                        <th style={{width: 50}}>
                            数量
                        </th>
                        <th  style={{width: 50}}>
                            单价
                        </th>
                    </tr>
                    <tbody>
                        {this.state.items.map((i, index) =>
                            <ItemRowComponent index={index} renderResult={this.renderResult} onFocus={this.rowOnFocus}
                                              onChange={this.onRowChange} value={i}/>
                        )}
                    </tbody>
                </table>
                {this.state.result}
            </div>
        );
    }
}


const itemInputStyle = {
    backgroundColor: 'rgba(0,0,0,0)',
    width: '90%',
    padding: 8,
    borderStyle: 'none',
};

const tdStyle = {
    overflow: 'hidden',
    backgroundColor: stringBgColor,
    textAlign: 'center',
    borderRadius: 4
};


class ItemRowComponent extends React.Component{
    constructor(props) {
        super(props);
        this.onFocus = this.onFocus.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onFocus() {
        this.props.onFocus(this.props.index);
    }

    handleChange(e) {
        let field = e.target.name;
        this.props.onChange(this.props.index, field, e.target.value);
    }

    itemidStyle(locked, style) {

        if (locked === true) {
            return Object.assign({}, style, {background: inputGoodColor});
        } else {
            return Object.assign({}, style, {background: stringBgColor});
        }
    }

    render() {
        const locked = this.props.value.locked;

        return (
            <tr>
                <td style={this.itemidStyle(locked, tdStyle)}>
                    <ProductInputComponent style={itemInputStyle} updateInput={this.handleChange} renderResult={this.props.renderResult} value={this.props.value.itemName} onFocus={this.onFocus}/>
                </td>
                <td style={tdStyle}>
                    <input style={itemInputStyle} min='1' max="9999" type="number" name="num" onChange={this.handleChange} value={this.props.value.num} onFocus={this.onFocus}/>
                </td>
                <td style={tdStyle}>
                    <input style={itemInputStyle} min='0' max="9999" type="number" step="0.01" name='px' onChange={this.handleChange} value={this.props.value.px} onFocus={this.onFocus}/>
                </td>
            </tr>
        );
    }
}

export {NewOrderComponent};