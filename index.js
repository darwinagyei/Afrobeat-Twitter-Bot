/**
 * Triggered from a message using Google Cloud Pub/Sub topic 
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */

import { tweetSearchItem } from './twitter-api-requests/tweet-search-item.js';
export async function helloPubSub(event, context) {
    const tweetSearchQuery = await tweetSearchItem();
    console.log(tweetSearchQuery);

}
