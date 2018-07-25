const http = require('http');

const port = 8080;

function Setup_APD_Socket() {
    http.createServer((request, response) => {
        /* GET method */
        if (request.method == 'GET') {
            if (request.url == '') {
            } else if (request.url == '') {
            } else if (request.url == '') {
            } else {
                //404Error
                console.log("GET error : no URI");
                response.writeHead(404);
                response.end();
            }
        } 
        /* POST method */
        else if (request.method == 'POST') {
            if (request.url == '') {
            }
            if (request.url == '') {
            } else {
                //404Error
                console.log("POST error : no URI");
                response.writeHead(404);
                response.end();
            }
        }
    }).listen(port, () => {
        console.log('Device Socket Running ('+port+') ...');
    });
}

Setup_APD_Socket();