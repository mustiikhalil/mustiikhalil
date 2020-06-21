
import axios from 'axios';
import uri from './uri';

export default axios.create({
    baseURL: uri,
    timeout: 5000,
    headers: {
      'Accept-Version': 1,
      'Accept': 'application/octet-stream',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Max-Age': 1,
      'Content-Type': 'application/octet-stream',
    },
})