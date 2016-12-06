/**
 style是树状，和html的div结构一一对应
 每一个style，分4个Section: frame, color, font, shape.
 */

let imgUrl = "http://54.223.65.44:8100/static/image/ibd/mb1";

const bgStyle = {
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% auto',
};

const tabBarStyle = {
    height: 60,
    backgroundColor: 'black'
};

const itemInterval = 50;

const itemImageStyle = {
    height: 50,
    width: 'auto',
    position: 'absolute',
    top: 20,
    left: 30
};

const itemTitleStyle = {
    position: 'absolute',
    left: itemImageStyle.left + itemInterval,
    top: 20,
};

const itemColorStyle = {
    position: 'absolute',
    left: itemTitleStyle.left,
    top: itemTitleStyle.bottom + 10,
};

const itemQStyle = {
    position: 'absolute',
    left: itemTitleStyle.left + itemInterval,
    top: 20,
};

const itemStatusStyle = {
    position: 'absolute',
    left: itemQStyle.left + itemInterval,
    top: 20
};

const itemReserveQStyle = {
    position: 'absolute',
    left: itemStatusStyle.left + itemInterval,
    top: 20,
    color: 'blue'
};


export default appStyle;

