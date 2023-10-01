import { newAccessToken } from "./utils/APIs/spotify/new-access-token.js";
import { searchQuery } from './utils/APIs/spotify/search-query.js';
import { tweetSearchItem } from './utils/APIs/twitter/tweet-search-item.js';


export function helloPubSub(event,context) {

    newAccessToken().then((response1) => {
        const access_token = response1.data.access_token;
        return searchQuery("afrobeat", "track", access_token);
    }).then((response2) => {

        const json_data = response2.data;
        const external_urls = json_data["tracks"]["items"][0].external_urls.spotify
        return tweetSearchItem(external_urls)
    }).then((response3) => {
        const tweet_spotify_url = response3.data.data;
        console.log(tweet_spotify_url)
    }).catch((error) => {
        console.error('Error:', error);

    })
}

helloPubSub();
