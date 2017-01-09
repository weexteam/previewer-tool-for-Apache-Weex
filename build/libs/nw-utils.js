'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getPublicIP = getPublicIP;
exports.getLocalIP = getLocalIP;
/*
 * Weex Toolkit Network utils
 */

var os = require('os');
var _ = require("underscore");
var localIP = require('quick-local-ip');

function getPublicIP() {
    var publicIP = "127.0.0.1"; //fallbck ip
    var ifaces = os.networkInterfaces();
    var address = _.flatten(_.values(ifaces));
    address = _.filter(address, function (ifObj) {
        return ifObj.family == "IPv4" && !/^127\./.test(ifObj.address);
    });
    if (address.length > 0) {
        publicIP = address[0].address;
    }
    return publicIP;
}

function getLocalIP() {
    return localIP.getLocalIP4();
}