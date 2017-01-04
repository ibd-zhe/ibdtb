import React from 'react';
import {TypeInputComponent} from '../UIComponent/SearchComponent.jsx'
import {searchProduct} from '../Model/IbdDb.js'
import {productSearchStyle, brandBoxStyle, productBoxStyle, itemBoxStyle} from '../Style/StyleProductSearch.js'


class ProductInputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.updateInput = this.updateInput.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.state = {value: undefined};
    }

    updateInput(search_term) {
        this.props.updateInput({target: {name: 'itemName', value: search_term}});
        if (search_term.length > 1) {
            searchProduct(search_term, this.updateContent);
        } else {
            this.updateContent('none');
        }
    }

    updateContent(dbjson) {
        if (dbjson === null) {
            window.alert('网络错误');
        } else if (dbjson == 'none') {
            this.props.renderResult(null);
        } else {
            this.props.renderResult(JSON.parse(dbjson));
        }
    }

    render() {
        return (
            <TypeInputComponent style={this.props.style} updateInput={this.updateInput} value={this.props.value} onFocus={this.props.onFocus}/>
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
    constructor(props) {
        super(props);
        this.itemClick = this.itemClick.bind(this);
    }

    itemClick(item) {
        let a = item;
        a.brand = this.props.brand;
        this.props.itemClick(a);
    }

    products() {
        if (this.props.products != undefined) {
            return this.props.products.map((product, index) =>
                <ProductComponent key={index} name={product.name} items={product.items} itemClick={this.itemClick}/>
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

    constructor(props) {
        super(props);
        this.itemClick = this.itemClick.bind(this);
    }

    itemClick(item) {
        const aa = {
            itemId: item.id,
            product: this.props.name,
            itemName: item.name + ' ' + item.number
        }
        console.log(aa);
        this.props.itemClick(aa);
    }

    render() {
        return (
            <div style={productBoxStyle}>
                <p style={productBoxStyle.productNameStyle}>
                    {this.props.name}
                </p>
                {(this.props.items != undefined) ? <ItemsComponent items={this.props.items} itemClick={this.itemClick}/> : null}

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
                <button type="button" onClick={this.handleClick} style={itemBoxStyle.itemStyle}>
                    {this.props.info.number}
                </button>
            )
        } else {
            return (
                <button type="button" onClick={this.handleClick} style={itemBoxStyle.itemStyle}>
                    {this.props.info.name} <br /> {this.props.info.number}
                </button>
            );
        }
    }
}

export {ProductInputComponent, ProductSearchResultComponent};