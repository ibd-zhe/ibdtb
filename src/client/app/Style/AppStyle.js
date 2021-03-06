import {host} from "../Model/IbdDb.js"

// background
const bgImgUrl = host + "static/image/ibd/bg";
const svgUrl = {
    searchSvg: host + "static/file/svg/search.svg"
};

const stringBgColor = 'rgba(54, 54, 54, 0.64)';
const inputGoodColor = 'linear-gradient(rgba(161, 230, 220, 0.7), rgba(80, 115, 110,0.7))'

const appStyle = {
    // background
    backgroundImage: 'url(' + bgImgUrl + ')',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% auto',

    // frame
    width: '100%',
    height: '100%',

    // font
    fontFamily: 'Lato, STXihei, Microsoft Yahei',
    fontSize: 14,

    // text color
    color: 'rgb(90%, 90%, 90%)',
    overflow: 'scroll'
};

const graLevel = 0.2;
const lightLevel = 110;

// tabBar
const titleBarStyle = {
    height: 80,
    background: `linear-gradient(180deg, rgba(${lightLevel},${lightLevel},${lightLevel},0.64) ,rgba(40, 40, 40, 0.8))`,
    width: '100%',
    position: 'relative',
};

const titleStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: 30,
    fontSize: 30
};

const tabBarStyle = {
    position: 'absolute',
    left: '70%',
    height: '100%',
    borderSpacing: '40px 0',
    borderCollapse: 'seperate',
    textAlign: 'center',
    fontSize: 18,
};

const tabStyle = {
};



export {appStyle, titleBarStyle, titleStyle, tabBarStyle, tabStyle, stringBgColor, svgUrl, inputGoodColor};

