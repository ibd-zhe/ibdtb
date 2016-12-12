import {stringBgColor, titleStyle, svgUrl} from './AppStyle.js'

const searchHeight = 40;

const searchStyle = {
    formStyle: {
        margin: '30px auto 0',
        width: 250,
        height: searchHeight,
        position: 'relative',
        borderRadius: searchHeight,
        backgroundColor: stringBgColor,
    },
    inputStyle: {
        borderRadius: 40,
        width: '80%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 16,
        textAlign: 'center',
        color: 'rgb(80%, 80%, 80%)',
        borderStyle: 'none'
    },
    submitStyle: {
        imgUrl: svgUrl.searchSvg,
        borderStyle: 'none',
        height: 25,
        width: 'auto',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        filter: 'grayscale(54%)'
    }
};

const bridgeStyle = {
    width: '100%',
};

const userStyle = {
    marginLeft: titleStyle.left,
    marginTop: 5,
    marginBottom: 50
};


// order bar
const orderStyle = {
    width: '100%',
    height: 60,
    backgroundColor: 'rgba(110,110,110,0.67)',
    textAlign: 'left',
    borderCollapse: 'collapse',
    tableLayout: 'fixed',

    numberStyle: {
        paddingLeft: userStyle.marginLeft,
        width: 225
    },

    timeStyle: {
        paddingLeft: 50,
        width: 200
    },

    reserveQStyle: {
        textAlign: 'right',
        paddingRight: 100
    }
};

// item
const itemStyle = {
    backgroundColor: stringBgColor,
    tableLayout: 'fixed',
    width: '100%',
    overflowWrap: 'break-word',
    borderCollapse: 'collapse',
    textAlign: 'left',
    borderStyle: 'hidden',

    rowStyle: {
        borderBottom: '2px solid rgba(187,129,151,0.5)'
    },

    imgStyle: {
        // width is for div
        width: 150,

        // height is for img
        height: 80,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: orderStyle.numberStyle.paddingLeft
    },

    nameStyle: {
        titleStyle: {
            fontSize: 15,
            marginLeft: 13,
        },
        colorStyle: {
            fontSize: 12,
            color: 'rgb(93,175,174)',
            marginLeft: 19
        }
    },
    numStyle: {
    },
    statusStyle: {
    },
    reserveStyle: orderStyle.reserveQStyle
};

export {searchStyle, userStyle, orderStyle, itemStyle, bridgeStyle};