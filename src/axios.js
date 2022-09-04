import axios from 'axios';


const instance = axios.create({
    baseURL: 
    // 'https://us-central1-challenge-78fda.cloudfunctions.net/api'
    'http://localhost:5001/challenge-78fda/us-central1/api' 
});
 
export default instance;
