import axios from 'axios';

export default axios.create( {
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID QHIvvDI__bNdTbx2mdyoq8P1nCdCg38oRltm7ijwJac'
    }
});