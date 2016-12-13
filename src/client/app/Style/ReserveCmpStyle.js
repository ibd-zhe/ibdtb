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

const reserveCmpStyle = {
    width: 1020,
};

const itemChildWidth = {
    img: 100,
    title: 210,
    color: 125,
    num: 10,
    status: 90,
    reserve: 10
};

const margin = (reserveCmpStyle.width - itemChildWidth.img - itemChildWidth.title
    - itemChildWidth.color - itemChildWidth.num - itemChildWidth.status - itemChildWidth.reserve)/6;

const userCmpStyle = {
    width: '100%'
};

const userStyle = {
    marginLeft: margin/2,
    marginTop: 5,
    marginBottom: 50
};


const orderCmpStyle = {
    width: '100%'
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
        paddingLeft: margin/2,
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
    width: '100%',
    display: 'flex',

    // vertical center content
    alignItems: 'center',

    imgStyle: {
        // width is for div
        width: itemChildWidth.img,

        // height is for img and this determines rows height
        height: 85,
        marginLeft: margin/2
    },

    titleStyle: {
        display: 'inline-block',
        fontSize: 15,
        width: itemChildWidth.title,
        marginLeft: margin,
        textAlign: 'center'
    },

    colorStyle: {
        fontSize: 12,
        color: 'rgb(93,175,174)',
        marginLeft: margin,
        width: itemChildWidth.color,
        textAlign: 'center'
    },

    pStyle: {
        display: 'inline-block',
        textAlign: 'left'
    },

    numStyle: {
        width: itemChildWidth.num,
        marginLeft: margin,
        textAlign: 'middle'
    },

    statusStyle: {
        width: itemChildWidth.status,
        textAlign: 'middle',
        marginLeft: margin
    },

    reserveStyle: {
        width: itemChildWidth.reserve,
        textAlign: 'middle',
        color: 'rgb(147,36,99)',
        marginLeft: margin
    }
};

export {searchStyle, userStyle, orderStyle, itemStyle, reserveCmpStyle, userCmpStyle, orderCmpStyle};