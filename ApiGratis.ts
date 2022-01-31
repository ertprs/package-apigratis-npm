import Payload from './Payload';
class ApiGratis{

    static service(server: any, apitoken: any, action: any, method: any, body: any) {
        let response = Payload.request(server, apitoken, action, method, body);
        return response;
    }

}

export default ApiGratis;
