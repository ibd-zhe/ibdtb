/**
 * Created by jiangjiang on 05/12/2016.
 */
import React from 'react';
import SearchComponent from '../UIComponent/SearchComponent.jsx'
import orderByUser from '../Model/IbdDb.js'
import {searchStyle, userStyle, orderStyle, itemStyle} from '../Style/ReserveCmpStyle.js'
import {contentStyle} from '../Style/AppStyle.js'

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
            <div style={contentStyle}>
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
                <div>
                    <div style={userStyle}>{this.props.content.user_id}</div>
                    {this.orders()}
                </div>
            );
        }
    }
}

class OrderComponent extends React.Component {

    items() {
        return this.props.items.map((item) =>
            <ItemComponent key={item.id} imgUrl={item.imgUrl} title={item.title} color={item.color} q={item.num} status={item.status} avail_q={item.avail_q}/>
        );
    }

    render() {
        return (
            <div>
                <OrderInfoComponent number={this.props.number} pay_time={this.props.pay_time}/>
                {this.items()}
            </div>
        );
    }
}

class OrderInfoComponent extends React.Component {
    render() {
        return (
            <div style={orderStyle}>
                <div style={orderStyle.numberStyle}>{"订单编号     " + this.props.number}</div>
                <div style={orderStyle.timeStyle}>{"付款时间     " + this.props.pay_time}</div>
                <div style={orderStyle.reserveQStyle}>{"预留"}</div>
            </div>
        )
    }
}

class ItemComponent extends React.Component {

    itemTBUrl() {
        return "https://item.taobao.com/item.htm?id=" + this.props.itemid;
    }

    render() {
        return (
            <table style={itemStyle}>
                <tbody>
                <tr style={itemStyle.rowStyle}>
                    <td style={itemStyle.imgStyle}>
                        <a href={this.itemTBUrl()} style={{width: "inherit"}}>
                            <img src={this.props.imgUrl} style={{width: 'inherit', height: 'auto'}}>
                            </img>
                        </a>
                    </td>
                    <td style={itemStyle.nameStyle}>
                        <p style={itemStyle.nameStyle.titleStyle}>
                            {this.props.title}
                        </p>
                        <p style={itemStyle.nameStyle.colorStyle}>
                            {this.props.color}
                        </p>
                    </td>
                    <td style={itemStyle.numStyle}>
                        {this.props.q}
                    </td>
                    <td style={itemStyle.statusStyle}>
                        {this.props.status}
                    </td>
                    <td style={itemStyle.numStyle}>
                        {this.props.avail_q}
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default ReserveComponent;

