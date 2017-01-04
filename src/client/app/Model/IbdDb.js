/**
 * Created by jiangjiang on 05/12/2016.
 */
var request = require('request');

const host = "http://54.223.65.44:8100/";
const orderUrl = host + "orders/";
const productUrl = host + "product/";
const supplyChainUrl = host + "supply"

function orderByUser(user_id, callback) {
    request(orderUrl + user_id, function (error, response, body) {
        if (!error) {
            callback(body);
        } else {
            callback(null);
        }
    });
}

function searchProduct(kwd, callback) {
    console.log(kwd);
    request(productUrl + kwd, function (error, response, body) {
        if (!error) {
            callback(body);
        } else {
            callback(null);
        }
    });
}

function getSupplyInfo(callback) {
    request(supplyChainUrl, function (error, response, body) {
        if (!error) {
            callback(body);
        } else {
            callback(null);
        }
    });
}
export {orderByUser, searchProduct, getSupplyInfo};
