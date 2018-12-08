import axios from 'axios';

const KEY = 'AIzaSyCuxYABpWuyixNevroWXqucTE1B-afsXFM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})