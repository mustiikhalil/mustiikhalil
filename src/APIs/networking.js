
import axios from 'axios';
import uri from './uri';

export default axios.create({
    baseURL: uri,
    timeout: 5000,
    headers: {
      'Accept': 'application/octet-stream',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/octet-stream',
    },
})