import axios from 'axios'
import { API_URL, JPA_API_URL } from '../../Constants'

class ClassService {

    //finds all courses based on username
    executeClassPathVariableService(username) {
        return axios.get(`${JPA_API_URL}/classes/${username}`);
    }

    //deletes class based on ID
    deleteClass(id) {
        //console.log('executed service')
        return axios.delete(`${JPA_API_URL}/class/${id}`);
    }

    //creates class
    addClass(teacher, type, classDay, classTime, course) {
        //console.log('executed service')
        return axios.post(`${JPA_API_URL}/class/${teacher}/${type}/${classDay}/${classTime}/${course}`);
    }

    //adds student to existing class
    addStudentClass(id, username){
        return axios.post(`${JPA_API_URL}/addStudentClass/${id}/${username}`);
    }

    displayStudentsClass(id){
        return axios.get(`${JPA_API_URL}/getStudentsClass/${id}`);
    }

}

export default new ClassService()