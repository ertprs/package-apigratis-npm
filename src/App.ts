import Payload from './Payload';
class APIGratis{

    static async service(server: any, apitoken: any, action: any, method: any, body: any) {
        let response = await Payload.request(server, apitoken, action, method, body);
        return response;
    }

}

export default APIGratis;
