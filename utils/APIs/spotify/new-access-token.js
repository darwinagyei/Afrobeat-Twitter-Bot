import axios from 'axios';


export async function newAccessToken() {

  const spotifyTokenBaseUrl = 'https://accounts.spotify.com/api/token';
  const spotifyClientId = process.env.SPOTIFY_CLIENT_ID;
  const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const data = { grant_type: 'client_credentials', client_id: spotifyClientId, client_secret: spotifyClientSecret };
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }

  }

  const request_access_token = await axios.post(spotifyTokenBaseUrl, data, config);
  const access_token = request_access_token.data;
  return access_token;


}




