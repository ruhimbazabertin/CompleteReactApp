import axios from 'axios';

const KEY = 'AIzaSyCRmWViCOn_P0ek4EPJSpTfmFAaYl9F788';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
        params : {
            part: 'snippet',
            maxResults: 5,
            key: KEY

        }
});