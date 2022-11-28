import fetch from 'node-fetch';
import { newAccessToken } from './new-access-token.js';


async function getArtists(artistId) {

    const getArtistsEndpoint = `https://api.spotify.com/v1/artists/${artistId}`;
    const bearerToken = await newAccessToken();
    

      fetch(getArtistsEndpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearerToken}`
        },
    }).then(res => res.json())
        .then(data => {
            console.log(data.name);
            return data.name 
        });
   
}

getArtists('7bXgB6jMjp9ATFy66eO08Z');









/**  fetch(getArtistsEndpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearerToken}`
        },
    }).then(res => res.json())
        .then(data => {
            console.log(data.name);
            return data.name;
        });





            try {
        const res = await fetch(getArtistsEndpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${bearerToken}`
            },
        });
        const data = await res.json();
        console.log(data.name);
        return data.name
      } catch (error) {
        console.error('Error:', error);
      }
 */


