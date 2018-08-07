const http = require('http');										//http 모듈

module.exports = {

    sendMsg: (serverIP, serverPort, method, path, data) => {

        REST_obj = {													
            host: serverIP,
            port: serverPort,
            path: path,
            method: method
        };


        sendMsgcallback = function (response) { 
            console.log('HTTP Response Code : ' + response.statusCode);		   //리턴코드를 분석하여 상태 확인
            if (response.statusCode != 200) {
                console.log('Error Response!');

                req.on('error', (e) => {
                    console.error(`problem with request: ${e.message}`);
                });
            } else {
                let serverdata = '';
                response.on('data', function (chunk) {							//응답 데이터를 JSON형태로 파싱함
                    console.log(chunk);
                });
                response.on('end', function () {			    				//응답이 끝났을 시 데이터 추출
                    console.log(serverdata);
                });
            }
        }
        let req = http.request(REST_obj, sendMsgcallback);						//POST요청 전송

        req.on('error', function (error) {
            console.log('관리서버와 연결할 수 없습니다.');
            console.log(error);							                        // 서버와 연결 불가능할 때에 오류 체크
        });

        req.setHeader("data", data);		                                    //헤더에 데이터 첨부		

        req.end();
    }
}    