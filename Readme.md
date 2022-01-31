# APIGratis 🚀
![APIGratis Banner](https://i.imgur.com/AK7iWyF.png)
> 🚨 This package is under development, we do not recommend using it in production.

[![npm version](https://img.shields.io/npm/v/apigratis.svg?color=green)](https://www.npmjs.com/package/apigratis)
[![Average time to resolve an issue](https://isitmaintained.com/badge/resolution/jhowbhz/package-apigratis-npm.svg)](https://isitmaintained.com/project/jhowbhz/apigratis 'Average time to resolve an issue')
[![Percentage of issues still open](https://isitmaintained.com/badge/open/jhowbhz/package-apigratis-npm.svg)](https://isitmaintained.com/project/jhowbhz/package-apigratis-npm  'Percentage of issues still open')
[![release-it](https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-release--it-e10079.svg)](https://github.com/release-it/release-it)
<a href="https://github.com/jhowbhz/package-apigratis-npm/issues" target="_blank"><img alt="GitHub issues" src="https://img.shields.io/github/issues/jhowbhz/package-apigratis-npm"></a>
<img alt="GitHub all releases" src="https://img.shields.io/github/downloads/jhowbhz/package-apigratis-npm/total">
<a href="https://github.com/jhowbhz/package-apigratis-npm/network" target="_blank"><img alt="GitHub forks" src="https://img.shields.io/github/forks/jhowbhz/package-apigratis-npm"></a>
<a href="https://github.com/jhowbhz/package-apigratis-npm/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/jhowbhz/package-apigratis-npm"></a>

## Description
> With this package it is possible to consume the free API's from the website <a href="https://apigratis.com.br" target="_blank"> APIGratis </a>, in a simple way.

## Our online channels
[![Telegram Group](https://img.shields.io/badge/Telegram-Group-32AFED?logo=telegram)](https://t.me/apigratisoficial)
[![WhatsApp Group](https://img.shields.io/badge/WhatsApp-Group-25D366?logo=whatsapp)](https://chat.whatsapp.com/KsxrUGIPWvUBYAjI1ogaGs)
[![YouTube](https://img.shields.io/youtube/channel/subscribers/UC-_mG5VU7maEKt5rUj8tSbQ?label=YouTube)](https://www.youtube.com/channel/UC-_mG5VU7maEKt5rUj8tSbQ)

## Install package with npm
```npm install apigratis```

## Status developing

| Up  | Services available            | Description       | Free    | Beta        | Stable   |
------|-------------------------------|-------------------|---------| ------------------------- | ------------------------- |
| ✅ | WhatsAppService                | Free in WhatsApp API.        |   ✅   | Loading                | Loading                    |
| ⌚ | CorreiosService                | API CEP or Tracker packages, correios Brazil.      |   💰   | Loading                   | Loading                   |
| ⌚ | SinespService                  | API Plate get infos vehicle.       |   💰   | Loading                   | Loading                   |

## WhatsAppService - Examples usage
In development.

```js
let start = request('https://whatsapp.contrateumdev.com.br', '5E22BC1231XGFQ36B7CEA234F35C47651A6', 'start', null, {
    "session": `sessao`,
    "sessionkey": `1234`,
    "wh_status": ``,
    "wh_message": ``,
    "wh_qrcode": ``,
    "wh_connect": ``
});

console.log(start);
```

```js
let qrcode = request('https://whatsapp.contrateumdev.com.br', null, 'qrcode', null, {
    "session": `sessao`,
    "sessionkey": `1234`,
});

console.log(qrcode);
```

## Partner project Myzap v2
https://github.com/edupoli/MyZap2.0<br/>
https://github.com/billbarsch/myzap

### Service free powered by
<a href="https://apigratis.com.br" target="_blank"> APIBrasil </a>
