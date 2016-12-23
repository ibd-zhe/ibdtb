import {stringBgColor} from './AppStyle.js'


const productSearchStyle = {
    margin: '20px auto 0',
    width: 500,
    backgroundColor: stringBgColor,
    overflowY: 'auto',
    maxHeight: 500,
    minHeight: 100,
    resultStyle: {
        width: '100%',
    }
};

const brandBoxStyle = {
    width: '100%',
    brandNameStyle: {
        color: 'rgb(201, 136, 145)',
        fontSize: 15,
        marginLeft: 18
    }
};

const productBoxStyle = {
    width: '100%',
    productNameStyle: {
        color: 'rgb(110, 165, 201)',
        fontSize: 16,
        marginLeft: brandBoxStyle.brandNameStyle.marginLeft
    }
};

const itemBoxStyle = {
    marginLeft: productBoxStyle.productNameStyle.marginLeft,
    marginRight: productBoxStyle.productNameStyle.marginLeft,
    fontSize: 12,
    itemStyle: {
        borderRadius: 3,
        marginLeft: 0,
        marginRight: 4,
        marginBottom: 4,
        borderStyle: 'none',
        color: 'inherit'
    }
};

export {productSearchStyle, brandBoxStyle, productBoxStyle, itemBoxStyle}