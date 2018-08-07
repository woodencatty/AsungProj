const http = require('http');
const sendMessage = require('./client.js');

const port = 8080;

function Setup_APD_Socket() {
    http.createServer((request, response) => {
        /* GET method */
        if (request.method == 'GET') {
            if (request.url == '') {
            } else if (request.url == '/device/control/setting') {
                //TODO : 연동모듈로부터 호출되는 제어명령 여부 확인요청 수신

                console.log("연동모듈이 보낸 본인의 ID : "+ request.headers.device_id);


                //응답전송부
                response.writeHead(200, { 'Content-Type': 'application/json' });                       //응답코드 설정
                response.end("{dry_temp : 80, top_valve : true, regen_valve : true ...} ");     //응답메세지
            
        
            } else {
                //404Error
                console.log("GET error : no URI");
                response.writeHead(404);
                response.end();
            }
        }
        /* POST method */
        else if (request.method == 'POST') {
            if (request.url == '/device/register') {
                //TODO : 연동모듈의 연결을 요청받는다.


            }
            if (request.url == '/device/log') {
                //TODO :서버로 전송할 제습건조기와 연동모듈의 장애로그 / 상태로그를 받는다.

            }
            if (request.url == '/sensor/data') {
                //TODO :서버로 전송할 계측데이터를 받는다.

            }
            if (request.url == '/device/meta') {
                //TODO : 서버로 전송할 메타데이터를 받는다.

            }
            if (request.url == '/device/control') {
                //TODO : 서버로부터 제습건조기로 보낼 제어명령 전송받는다

            } else {
                //404Error
                console.log("POST error : no URI");
                response.writeHead(404);
                response.end();
            }
        }
    }).listen(port, () => {
        console.log('Device Socket Running (' + port + ') ...');
    });
}

Setup_APD_Socket();