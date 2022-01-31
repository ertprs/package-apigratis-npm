import { request } from './request';

export function service(server: any, apitoken: any, action: any, method: any, body: any) {
    let response = request(server, apitoken, action, method, body);
    return response;
}