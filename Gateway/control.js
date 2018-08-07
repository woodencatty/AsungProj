const rest = require('./client.js');

var serverIP = "192.9.124.24";      //서버 IP
var serverPort = "8081";            //서버 PORT
var method = "POST";                //REST 메소드
var path = "/device/whatever";      //URL
var data = {
    wow: "wow",
    Yhea: "Yhea"
};

rest.sendMsg(serverIP, serverPort, method, path, data);