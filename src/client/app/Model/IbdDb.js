/**
 * Created by jiangjiang on 05/12/2016.
 */
var request = require('request');

const orderUrl = "http://54.223.65.44:8100/orders/";

function orderByUser(user_id, callback) {
    request(orderUrl + user_id, function (error, response, body) {
        if (!error) {
            callback(body);
        } else {
            callback(null);
        }
    });
}


export default orderByUser;
