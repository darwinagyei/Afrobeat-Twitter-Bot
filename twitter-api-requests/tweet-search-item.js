import fetch from 'node-fetch';
import * as crypto from 'crypto';
import OAuth from "oauth-1.0a";
import { searchQuery } from '../spotify-api-requests/search-query.js';



const consumer_key = process.env.CONSUMER_KEY;
const consumer_secret= process.env.CONSUMER_SECRET;
const oauth_token = process.env.OAUTH_TOKEN;
const oauth_token_secret = process.env.OAUTH_TOKEN_SECRET;


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
    key: oauth_token,
    secret: oauth_token_secret
};

async function tweetSearchItem() {

    const createTweetEndpointURL = 'https://api.twitter.com/2/tweets';
    const searchItem = await searchQuery('afrobeat', 'playlist', "playlists");
    const data = { text: `${searchItem}` };



    const authHeader = oauth.toHeader(oauth.authorize({
        url: createTweetEndpointURL,
        method: 'POST'
    }, token));



    try {
        const res = await fetch(createTweetEndpointURL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                Authorization: authHeader["Authorization"],
                'user-agent': "v2CreateTweetJS",
                'content-type': "application/json",
                'accept': "application/json"
            }

        });

        const tweet_res = await res.json();
        console.log(tweet_res);
        return tweet_res;

    } catch (error) {
        console.log('Error:', error);
    }


}


tweetSearchItem();


