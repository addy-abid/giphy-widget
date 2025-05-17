import { LightningElement, api } from 'lwc';
import getApiKey from '@salesforce/apex/GiphySettingProvider.getApiKey';

export default class GiphyWidget extends LightningElement {
    @api searchTerm;
    gifUrl;

    connectedCallback() {
        this.loadGif();
    }

    async loadGif() {
        try {
            const API_KEY = await getApiKey();
            const query = encodeURIComponent(this.searchTerm || 'funny');
            const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${query}`;

            const res = await fetch(url);
            const data = await res.json();
            this.gifUrl = data?.data?.images?.downsized_medium?.url;
        } catch (err) {
            console.error('GIF fetch error:', err);
        }
    }
}
