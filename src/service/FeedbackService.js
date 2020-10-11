import axios from 'axios';

const FEEDBACK_BASE_URI = "http://localhost:8080/api/v1/feedback"

class FeedbackService {

    getfeedback(){
        return axios.get(FEEDBACK_BASE_URI)
    }

    createfeedback(feedback){
        return axios.post(FEEDBACK_BASE_URI , feedback)
    }
    

}

export default new FeedbackService()