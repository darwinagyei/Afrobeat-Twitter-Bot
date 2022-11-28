import fetch from 'node-fetch';
import querystring from 'query-string';



 export async function newAccessToken() {

  const spotifyTokenEndpoint = 'https://accounts.spotify.com/api/token';
  const spotifyClientId = process.env.SPOTIFY_CLIENT_ID;
  const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET; 
  const body = { grant_type: 'client_credentials' };



  try {
    const res = await fetch(spotifyTokenEndpoint, {
      method: 'POST',
      body: querystring.stringify(body),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (Buffer.from(spotifyClientId + ':' + spotifyClientSecret).toString('base64'))
      },
    });
    const data = await res.json();
    console.log(data.access_token);
    return data.access_token;
  } catch (error) {
    console.error('Error:', error);
  }


}







