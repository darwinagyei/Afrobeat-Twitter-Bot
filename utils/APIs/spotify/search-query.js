import axios from 'axios';

export async function searchQuery(genre, type, token) {

    const randomOffsetNumber = Math.floor(Math.random() * 1000);
    const searchEndpointURL = `https://api.spotify.com/v1/search?q=${genre}&type=${type}&offset=${randomOffsetNumber}&limit=1`;
    const bearerToken = token;
    const config = {
        headers: {
            'Authorization': `Bearer ${bearerToken}`
        }
    }

    const get_search_item = await axios.get(searchEndpointURL, config);
    const search_item_data = get_search_item.data;
    return search_item_data;


}

