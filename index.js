import { newAccessToken } from "./utils/APIs/spotify/new-access-token.js";
import { searchQuery } from './utils/APIs/spotify/search-query.js';
import { tweetSearchItem } from './utils/APIs/twitter/tweet-search-item.js';




export const handler = async (event) => {

    try {

        const spotify_access_token = await newAccessToken();
        const access_token = spotify_access_token.access_token;
        const spotifySearchItem = await searchQuery("afrobeat", "track", access_token);
        const external_urls = spotifySearchItem["tracks"]["items"][0].external_urls.spotify;
        const tweet_search_item = await tweetSearchItem(external_urls);
        return(tweet_search_item);

    }catch(err){
        console.error(err);
    }

};
