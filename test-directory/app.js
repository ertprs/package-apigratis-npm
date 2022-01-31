const apigratis = require('apigratis');

let start = apigratis?.request('https://whatsapp.contrateumdev.com.br', '5E22BC1231XGFQ36B7CEA234F35C47651A6', 'start', null, {
    "session": `sessao`,
    "sessionkey": `1234`,
    "wh_status": ``,
    "wh_message": ``,
    "wh_qrcode": ``,
    "wh_connect": ``
});

console.log(start);