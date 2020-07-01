const userInfo = require("os").userInfo();
const interfaces = require("os").networkInterfaces();

module.exports = (ip, mac, net, command) => {
  const layers = {};
  for (let interface in interfaces) {
    for (let k2 in interfaces[interface]) {
      const address = interfaces[interface][k2];
      if (address.family === "IPv4" && !address.internal) {
        layers["mac"] = address.mac;
        layers["ip"] = address.address;
        layers["net"] = address.netmask;
      }
    }
  }

  if (command) {
    function Command(ip, mac, net) {
      this.ViewAddress = "ipnode";
      this.ViewIP_Address = ip;
      this.ViewMAC_Address = mac;
      this.ViewNET_Address = net;
    }
    const ipnode_command = new Command(
      "ipnode --ip",
      "ipnode --mac",
      "ipnode --net"
    );
    console.table(ipnode_command);
  } else if (ip)
    console.log(
      `\n[ IPv4 :: ${layers.ip} ]\nThank You ${userInfo.username} 🥰 D‹Y‹E\n`
    );
  else if (mac)
    console.log(
      `\n[ MAC :: ${layers.mac} ]\nThank You ${userInfo.username} 🥰 D‹Y‹E\n`
    );
  else if (net)
    console.log(
      `\n[ NET_MASK :: ${layers.net} ]\nThank You ${userInfo.username} 🥰 D‹Y‹E\n`
    );
  else {
    console.log(`\n[ IPv4 :: ${layers.ip} ]`);
    console.log(`\n[ MAC :: ${layers.mac} ]`);
    console.log(`\n[ NET_MASK :: ${layers.net} ]`);
    console.log(`\nMade With 💔 By FindForhad D‹Y‹E™\n`);
  }
};
