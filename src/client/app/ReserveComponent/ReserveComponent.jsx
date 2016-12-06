/**
 * Created by jiangjiang on 05/12/2016.
 */
import React from 'react';
import SearchComponent from '../UIComponent/SearchComponent.jsx'
import orderByUser from '../Model/IbdDb.js'

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
            <div>
                <SearchComponent search={this.search}/>
                <UserComponent content={this.state.content}/>
            </div>
        );
    }
}

class UserComponent extends React.Component {

    orders() {
        return this.props.content.orders.map((order) =>
            <OrderComponent key={order.ordernumber} pay_time={order.pay_time} items={order.items}/>
        );
    }

    render() {
        if (this.props.content === null) {
            return null;
        }
        else {
            return (
                <div>
                    {this.props.content.user_id}
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
                <div>{this.props.key}</div>
                <div>{this.props.pay_time}</div>
                <div>{this.items()}</div>
            </div>
        );
    }
}

class ItemComponent extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.imgUrl}/>
                <div>{this.props.title}</div>
                <div>{this.props.color}</div>
                <div>{this.props.q}</div>
                <div>{this.props.status}</div>
                <div>{this.props.avail_q}</div>
            </div>
        );
    }
}

export default ReserveComponent;

