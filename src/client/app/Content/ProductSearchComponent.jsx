import React from 'react';
import {TypeInputComponent} from '../UIComponent/SearchComponent.jsx'
import {searchProduct} from '../Model/IbdDb.js'
import {productSearchStyle, searchBoxStyle, brandBoxStyle, productBoxStyle, itemBoxStyle} from '../Style/StyleProductSearch.js'


class ProductInputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.ACSearch = this.ACSearch.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.updateInput = this.updateInput.bind(this);
        this.state = {content: null, value: undefined};
    }

    ACSearch(search_term) {
        console.log(search_term);
        this.setState({value: search_term});
        if (search_term.length > 1) {
            searchProduct(search_term, this.updateContent);
        }
    }

    updateContent(dbjson) {
        if (dbjson === null) {
            window.alert('网络错误');
        } else if (dbjson == 'none') {
            this.setState({content: null});
        } else {
            this.setState({
                content: JSON.parse(dbjson)
            });
        }
    }

    updateInput(item) {
        this.setState({value: item.name + item.number});
    }

    render() {
        return (
            <div style={productSearchStyle}>
                <TypeInputComponent ACSearch={this.ACSearch} value={this.state.value}/>
                <ProductSearchResultComponent content={this.state.content} itemClick={this.updateInput}/>
            </div>
        );
    }
}

class ProductSearchResultComponent extends React.Component {

    brands() {
        return this.props.content.map((brand, index) =>
            <BrandComponent key={index} brand={brand.brand} products={brand.products} itemClick={this.props.itemClick}/>
        )
    }

    render() {
        if (this.props.content == null) {
            return null;
        } else {
            return (
                <div style={productSearchStyle.resultStyle}>
                    {this.brands()}
                </div>
            );
        }

    }
}

class BrandComponent extends React.Component {

    products() {
        console.log(this.props.products);
        if (this.props.products != undefined) {
            return this.props.products.map((product, index) =>
                <ProductComponent key={index} name={product.name} items={product.items} itemClick={this.props.itemClick}/>
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <div style={brandBoxStyle}>
                <p style={brandBoxStyle.brandNameStyle}>
                    {this.props.brand}
                </p>
                {this.products()}
            </div>
        )
    };
}

class ProductComponent extends React.Component {
    render() {
        return (
            <div style={productBoxStyle}>
                <p style={productBoxStyle.productNameStyle}>
                    {this.props.name}
                </p>
                {(this.props.items != undefined) ? <ItemsComponent items={this.props.items} itemClick={this.props.itemClick}/> : null}

            </div>
        );
    }
}

class ItemsComponent extends React.Component {
    items() {
        return this.props.items.map((item) =>
            <ItemCellComponent key={item.id} info={item} itemClick={this.props.itemClick}/>
        );
    }

    render() {
        return (
            <div style={itemBoxStyle}>
                {this.items()}
            </div>
        );
    }
}

class ItemCellComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.itemClick(this.props.info);
    }

    render() {
        if (this.props.info.name == '') {
            return (
                <button onClick={this.handleClick} style={itemBoxStyle.itemStyle}>
                    {this.props.info.number}
                </button>
            )
        } else {
            return (
                <button onClick={this.handleClick} style={itemBoxStyle.itemStyle}>
                    {this.props.info.name} <br /> {this.props.info.number}
                </button>
            );
        }
    }
}

export {ProductInputComponent};