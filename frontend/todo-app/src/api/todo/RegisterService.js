import axios from 'axios'
import { API_URL, JPA_API_URL } from '../../Constants'
class RegisterService {
    addStudent(username, password, email) {
        console.log('executed registerService')
        return axios.post(`${JPA_API_URL}/addStudent/${username}/${password}/${email}`);

    }
}

export default new RegisterService()