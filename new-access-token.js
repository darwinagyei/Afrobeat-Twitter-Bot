import axios from 'axios';


export async function newAccessToken() {

  const spotifyTokenBaseUrl = 'https://accounts.spotify.com/api/token';
  const spotifyClientId = "470fefcd38b244368319fe5a13dcd6d6";
  const spotifyClientSecret = "f54b859a89014e9592418b997b74849e";
  const data = { grant_type: 'client_credentials', client_id: spotifyClientId, client_secret:spotifyClientSecret };
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }

  }

  const awaitRes = await axios.post(spotifyTokenBaseUrl, data, config);
  return awaitRes;


}




