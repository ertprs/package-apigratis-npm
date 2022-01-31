import { request } from './request.js';

async function service() {
    let response = request(server, apitoken, action, method, body);
    return response;
}