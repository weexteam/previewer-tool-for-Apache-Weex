
const request = require('request');
const dns = require('dns');

let shouldBeTelemetry = false;

const record = (logkey, gokey) => {
  if (!shouldBeTelemetry) {
    return;
  }
  let url = `http://gm.mmstat.com${logkey}?`;
  for (const i in gokey) {
    if (gokey.hasOwnProperty(i)) {
      url += `${i}=${gokey[i]}&`;
    }
  }
  url += `t=${(new Date()).getTime()}`;
  dns.resolve('gm.mmstat.com', (err) => {
    if (!err) {
      request.get(url);
    }
  });
};

const allowTarck = () => {
  shouldBeTelemetry = true;
};

module.exports = {
  record,
  allowTarck
};
