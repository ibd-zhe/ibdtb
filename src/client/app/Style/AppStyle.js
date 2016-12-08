
// background
const host = "http://54.223.65.44:8100/static/";
const bgImgUrl = host + "image/ibd/bg";
const svgUrl = {
    searchSvg: host + "file/search.svg"
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
    fontFamily: 'Lato, SimHei, 黑体',

    // color
    color: 'rgb(90%, 90%, 90%)',
    display: 'flex',
    flexFlow: 'column'
};

const contentStyle = {
    flex: '1 0 auto'
};

// tabBar
const titleBarStyle = {
    height: 60,
    backgroundColor: stringBgColor,
    width: '100%',
    position: 'relative',
    flex: '0 1 auto'
};

const titleStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: 40,
    fontSize: 30
};

const tabBarStyle = {
    position: 'absolute',
    left: '60%',
    height: '100%',
    borderSpacing: '40px 0',
    borderCollapse: 'seperate'
};

const tabStyle = {
    textAlign: 'center',
    verticalAlign: 'middle',
    fontSize: 18,
};



export {appStyle, titleBarStyle, titleStyle, tabBarStyle, tabStyle, stringBgColor, contentStyle, svgUrl};

