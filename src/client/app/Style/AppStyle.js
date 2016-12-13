
// background
const host = "http://54.223.65.44:8100/static/";
const bgImgUrl = host + "image/ibd/bg";
const svgUrl = {
    searchSvg: host + "file/svg/search.svg"
};

const stringBgColor = 'rgba(54, 54, 54, 0.64)';

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
    fontFamily: 'Lato, SimHei',

    // text color
    color: 'rgb(90%, 90%, 90%)',
    overflow: 'scroll'
};

// tabBar
const titleBarStyle = {
    height: 80,
    backgroundColor: stringBgColor,
    width: '100%',
    position: 'relative',
    fontFamily: 'Lato, STXihei, Microsoft YaHei'
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
    left: '60%',
    height: '100%',
    borderSpacing: '40px 0',
    borderCollapse: 'seperate',
    textAlign: 'center',
    fontSize: 18,
};

const tabStyle = {
};



export {appStyle, titleBarStyle, titleStyle, tabBarStyle, tabStyle, stringBgColor, svgUrl};

