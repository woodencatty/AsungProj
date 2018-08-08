const sendMessage = require('./client.js');


const rest = require('./client.js');

var serverIP             //서버 IP
var serverPort           //서버 PORT
var method               //REST 메소드
var path                 //URL

//JSON형식으로 데이터를 구성
var data = {
  wow: "wow",
  Yhea: "Yhea"
};

rest.sendMsg(serverIP, serverPort, method, path, data);

function initialize() {
  fs.readFile('./settings.conf', 'utf8', function (err, data) {
    var config = JSON.parse(data);

    serverIP = data.serverIP;
    serverPort = data.serverPort;
    method = data.method;
    path = data.path;


    rest.sendMsg(serverIP, serverPort, method, path, data); // 메세지전송

  });
}


