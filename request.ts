import axios from "axios";

let config = {};

export function request(server: any, apitoken: any, action: any, method: any, body: any) {

    switch(action){
        case 'start':
            config = {
                method: `${method || 'GET'}`,
                url: `${server || 'http://localhost:3333'}/${action || 'start'}`,
                headers: {
                    'apitoken': `${apitoken || ''}`, 
                    'Content-Type': 'application/json'
                },
                data : JSON.stringify(body)
            };
        break;
        case 'qrcode':
            config = {
                method: `${'GET'}`,
                url: `${server || 'http://localhost:3333'}/${action}?session=${body?.session}&sessionkey=${body?.sessionkey}`,
                headers: {
                    'Content-Type': 'application/json'
                },
            };
        break;
        default:
            config = {
                method: `${method || 'POST'}`,
                url: `${server || 'http://localhost:3333'}/${action || ''}`,
                headers: {
                    'sessionkey': `${body?.sessionkey || ''}`,
                    'Content-Type': 'application/json'
                },
                data : JSON.stringify(body)
            };
        break;
    }
    
    axios(config).then(function (response) {
        console.log(response?.data);
        return JSON.stringify(response?.data);
    }).catch(function (error) {

        console.log('erro ==> ', error?.response?.data);
        return error?.response?.data;
    });

}