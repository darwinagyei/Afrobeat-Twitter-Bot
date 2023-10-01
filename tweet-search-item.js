import * as crypto from 'crypto';
import OAuth from "oauth-1.0a";
import axios from 'axios';




const consumer_key = "GvUSRa8Svj4izfakDb1WBaD31";
const consumer_secret = "vAPqmjqueY6sKHWoAx7wSnqI8SOgPGSiOcBIGTIvZjnjgtz38K";
const access_token = "1707554717717368832-tw5CYsImQGyUKRNlrg3sh17auNghcf";
const access_token_secret = "fINefxXtrVUrcYYnhGOgpqpysoILcBbTfHuYqC7oyQWia";


const oauth = OAuth({
    consumer: {
        key: consumer_key,
        secret: consumer_secret
    },
    signature_method: 'HMAC-SHA1',
    hash_function(base_string, key) {
        return crypto
            .createHmac('sha1', key)
            .update(base_string)
            .digest('base64')
    },
});


const token = {
    key: access_token,
    secret: access_token_secret
};

export async function tweetSearchItem(url) {
    const createTweetEndpointURL = 'https://api.twitter.com/2/tweets';
    const data = { text: url };
    const authHeader = oauth.toHeader(oauth.authorize({
        url: createTweetEndpointURL,
        method: 'POST'
    }, token));
    const config = {

        headers: {
            Authorization: authHeader["Authorization"],
            'user-agent': "v2CreateTweetJS",
            'content-type': "application/json",
            'accept': "application/json"
        }

    }

    const awaitRes = await axios.post(createTweetEndpointURL, data, config);
    return awaitRes;


}

