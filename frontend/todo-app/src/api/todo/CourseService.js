import axios from 'axios'
import { API_URL, JPA_API_URL } from '../../Constants'

class CourseService {

    //finds courses based on username
    executeCoursePathVariableService(username) {
        return axios.get(`${JPA_API_URL}/courses/${username}`);
    }

    //deletes course based on ID
    deleteCourse(id) {
        //console.log('executed service')
        return axios.delete(`${JPA_API_URL}/course/${id}`);
    }

    //creates course
    addCourse(name, description) {
        //console.log('executed service')
        return axios.post(`${JPA_API_URL}/course/${name}/${description}`);
    }

    //adds student to existing course
    addStudentCourse(id, username){
        return axios.post(`${JPA_API_URL}/addStudentCourse/${id}/${username}`);
    }

    displayStudentsCourse(id){
        return axios.get(`${JPA_API_URL}/getStudentsCourse/${id}`);
    }

}

export default new CourseService()