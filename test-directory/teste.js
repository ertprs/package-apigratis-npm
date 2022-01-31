import APIGratis from 'apigratis';

let server = `https://whatsapp.contrateumdev.com.br`;
let start = ApiGratis.service(server, 'YOUR_TOKEN', `start`, null, {
    "session": `YOUR_SESSION`,
    "sessionkey": `YOUR_SESSION_KEY`,
    "wh_status": ``,
    "wh_message": ``,
    "wh_qrcode": ``,
    "wh_connect": ``
});

console.log(start);