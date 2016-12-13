import React from 'react';
import SearchComponent from '../UIComponent/SearchComponent.jsx'
import orderByUser from '../Model/IbdDb.js'
import {searchStyle, userStyle, orderStyle, itemStyle, reserveCmpStyle, userCmpStyle, orderCmpStyle, itemBgColor} from '../Style/ReserveCmpStyle.js'

class ReserveComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {content: null};
        this.search = this.search.bind(this);
        this.updateContent = this.updateContent.bind(this);
    }

    search(keywords) {
        orderByUser(keywords, this.updateContent)
    }

    updateContent(content) {
        if (content === null) {
            window.alert('网络错误');
        } else if (content == 'no') {
            window.alert('没找到此用户');
        } else {
            this.setState({
                content: JSON.parse(content)
            });
        }
    }

    render() {
        return (
            <div style={reserveCmpStyle}>
                <SearchComponent search={this.search} style={searchStyle} placeholder="请输入上帝id"/>
                <UserComponent content={this.state.content}/>
            </div>
        );
    }
}

class UserComponent extends React.Component {

    orders() {
        return this.props.content.orders.map((order) =>
            <OrderComponent key={order.ordernumber} number={order.ordernumber} pay_time={order.pay_time} items={order.items}/>
        );
    }

    render() {
        if (this.props.content === null) {
            return null;
        }
        else {
            return (
                <div style={userCmpStyle}>
                    <p style={userStyle}>{this.props.content.user_id}</p>
                    {this.orders()}
                </div>
            );
        }
    }
}

class OrderComponent extends React.Component {

    items() {
        return this.props.items.map((item, index) =>
                    <ItemComponent key={item.id} imgUrl={item.imgUrl} title={item.title} color={item.color} q={item.num} status={item.status}
                                   itemid={item.itemid} avail_q={item.avail_q} last={index===this.props.items.length - 1}/>
                );
    }

    render() {
        return (
            <div style={orderCmpStyle}>
                <OrderInfoComponent number={this.props.number} pay_time={this.props.pay_time}/>
                {this.items()}
            </div>
        );
    }
}

class OrderInfoComponent extends React.Component {
    render() {
        return (
            <table style={orderStyle}>
                <tbody>
                <tr>
                    <td style={orderStyle.numberStyle}>{"订单编号     " + this.props.number}</td>
                    <td style={orderStyle.timeStyle}>{"付款时间     " + this.props.pay_time}</td>
                    <td style={orderStyle.reserveQStyle}>{"预留"}</td>
                </tr>
                </tbody>
            </table>
        );
    }
}

class ItemComponent extends React.Component {

    itemTBUrl() {
        return "https://item.taobao.com/item.htm?id=" + this.props.itemid.toString();
    }

    content() {
        return (
            <div style={itemStyle}>
                <div style={itemStyle.imgStyle}>
                    <a href={this.itemTBUrl()} target="_blank" style={{height: "inherit"}}>
                        <img src={this.props.imgUrl} style={{height: 'inherit', width: 'auto'}}>
                        </img>
                    </a>
                </div>

                <p style={itemStyle.titleStyle}>
                    {this.props.title}
                </p>

                <p style={itemStyle.colorStyle}>
                    {this.props.color}
                </p>

                <p style={itemStyle.numStyle}>
                    {this.props.q}
                </p>

                <p style={itemStyle.statusStyle}>
                    {this.props.status}
                </p>

                <p style={itemStyle.reserveStyle}>
                    {this.props.avail_q}
                </p>
            </div>
        );
    }

    render() {
        if (this.props.last === false) {
            return (
                <div style={{width: '100%', backgroundColor: itemBgColor}}>
                    {this.content()}
                    <svg style={{display: 'block',height: 3, width: '100%',stroke: 'rgba(199,131,131,0.7)',strokeDasharray: '8 8', strokeidth: 3}}>
                        <line x1="0%" y1="0%" x2="100%" y2="0%"/>
                    </svg>
                </div>
            );
        } else {
            return (
                <div style={itemStyle.lastStyle}>
                    {this.content()}
                </div>
            );
        }

    }
}


export default ReserveComponent;

