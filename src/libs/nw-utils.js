/*
 * Weex Toolkit Network utils
 */

const os  = require('os');
const _   = require("underscore");
const localIP = require('quick-local-ip');

export function getPublicIP(){
    let publicIP = "127.0.0.1"  //fallbck ip
	let ifaces = os.networkInterfaces()
	let address = _.flatten(_.values(ifaces))
	address = _.filter( address , (ifObj) =>
                        (
                            (ifObj.family == "IPv4") &&
                            (  ! /^127\./.test(ifObj.address)  )
                        )
                      )
	if (address.length > 0 ){
	    publicIP = address[0].address
	}
    return publicIP
}

export function getLocalIP() {
  return localIP.getLocalIP4();
}



