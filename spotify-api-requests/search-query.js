import fetch from 'node-fetch';
import { newAccessToken } from './new-access-token.js';




export async function searchQuery(genre, type, object) {

    const randomOffsetNumber = Math.floor(Math.random() * 1000);
    const searchEndpointURL = `https://api.spotify.com/v1/search?q=${genre}&type=${type}&offset=${randomOffsetNumber}&limit=1`;
    const bearerToken = await newAccessToken();


    try {
        const res = await fetch(searchEndpointURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${bearerToken}`
            },
        });

        const data = await res.json();

        const external_urls = data[object]["items"][0].external_urls.spotify;
        console.log(external_urls);
        return external_urls;
    } catch (error) {
        console.log('Error:', error);
    }




}



