import axios from 'axios'
import { API_URL, JPA_API_URL } from '../../Constants'

class HelloWorldService {

    executeHelloWorldService() {
        //console.log('executed service')
        return axios.get(`${JPA_API_URL}/hello-world`);
    }

    executeHelloWorldBeanService() {
        //console.log('executed service')
        return axios.get(`${JPA_API_URL}/hello-world-bean`);
    }

    executeHelloWorldPathVariableService(name) {
        //console.log('executed service')
        // let username = 'sept'
        // let password = 'dummy'

        // let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)

        return axios.get(`${JPA_API_URL}/hello-world/path-variable/${name}`
            // , 
            //     {
            //         headers : {
            //             authorization: basicAuthHeader
            //         }
            //     }
        );
    }

}

export default new HelloWorldService()