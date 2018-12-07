import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 36a780b01a2534dce9d0d309ddd34e9d62db322e17975e731de643d25922a1a3'
    }
});