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

    numberStyle: {
        marginLeft: userStyle.marginLeft,
        height: '100%',
        display: 'inline-block',
        textAlign: 'center'
    },

    timeStyle: {
        marginLeft: 70,
        height: '100%',
        display: 'inline-block',
        textAlign: 'center'
    },

    reserveQStyle: {
        marginLeft: 750,
        height: '100%',
        display: 'inline-block',
        textAlign: 'center'
    }
};

// item
const itemStyle = {
    backgroundColor: stringBgColor,
    tableLayout: 'fixed',
    width: 1,
    overflowWrap: 'break-word',
    borderCollapse: 'collapse',
    textAlign: 'center',
    rowStyle: {
        borderBottom: '2px dashed rgba(125,125,0,0.5)'
    },
    imgStyle: {
        width: 150,
        height: 80,
        padding: 20
    },
    nameStyle: {
        width: 680,
        titleStyle: {
            fontSize: 15,
            textAlign: 'left',
            marginLeft: 13,
        },
        colorStyle: {
            fontSize: 12,
            color: 'rgb(93,175,174)',
            marginLeft: 19
        }
    },
    numStyle: {
        width: 40
    },
    statusStyle: {
        width: 300
    },
    reserveStyle: {

    }
};

export {searchStyle, userStyle, orderStyle, itemStyle};