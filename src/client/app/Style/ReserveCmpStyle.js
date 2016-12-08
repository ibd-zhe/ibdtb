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
    leftMargin: titleStyle.left,
    topMargin: 5
};

export {searchStyle, userStyle};