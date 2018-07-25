const http = require('http');										//http 모듈

var garewayIP = "";                                                  //게이트웨이IP
var garewayPort = "";                                                 //게이트웨이포트


module.exports = {
    //서버IP정의
    init: (IP, Port) => {
        garewayIP = IP;
        garewayPort = Port;
    },


    SubmitError: (ID) => {


        POST_APDError = {														//POST요청 JSON데이터 정의
            host: garewayIP,
            port: garewayPort,
            path: '/device/error',
            method: 'POST'
        };

        SubmitErrorcallback = function (response) {
            console.log('HTTP Response Code : ' + response.statusCode);		//리턴코드를 분석하여 상태 확인
            if (response.statusCode != 200) {
                console.log('Error Response!');

                req.on('error', (e) => {
                    console.error(`problem with request: ${e.message}`);
                });
            } else {
                let garewaydata = '';
                response.on('data', function (chunk) {							//응답 데이터를 JSON형태로 파싱함
                    console.log(chunk);
                });
                response.on('end', function () {									//응답이 끝났을 시 데이터 추출
                    console.log(garewaydata);
                });
            }
        }
        let req = http.request(POST_APDError, SubmitErrorcallback);						//POST요청 전송
       
        req.on('error', function (error) {
            console.log('관리서버와 연결할 수 없습니다.');
            console.log(error);							// 관리서버와 연결 불가능할 때에 오류 체크
        });
     
       // req.setHeader("DATANAME", DATA);											//헤더에 요청 데이터 첨부		

        req.end();
    }
}    