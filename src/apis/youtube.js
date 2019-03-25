import axios from 'axios';

const KEY = 'AIzaSyAIU6gXEh_nZHezR1TcwWc9C_K3gWpqVFs';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }

});