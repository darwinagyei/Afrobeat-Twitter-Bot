import axios from 'axios';

export async function searchQuery(genre, type, token) {

    const randomOffsetNumber = Math.floor(Math.random() * 1000);
    const searchEndpointURL = `https://api.spotify.com/v1/search?q=${genre}&type=${type}&offset=${randomOffsetNumber}&limit=1`;
    const bearerToken = token;
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearerToken}`
        }
    }

    const awaitRes = await axios.get(searchEndpointURL, config);
    return awaitRes;



}


