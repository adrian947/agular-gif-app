import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GifsResponse } from '../interfaces/gitsResponse.interface';

const API_KEY = 'BJBOk8upqrW7hwTjJrAf58X7KCiXJZcz';
const URL = 'https://api.giphy.com/v1/gifs/search';
const PARAMS = '&limit=6&offset=0&rating=g&lang=en&bundle=messaging_non_clips';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagsHistory: string[] = [];
  private _gifs: Gif[] = [];
  constructor(private http: HttpClient) {}

  get tagsHistory() {
    return [...this._tagsHistory];
  }
  get gifs() {
    return [...this._gifs];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((e) => e !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
  }

  searchTag(tag: string): void {
    this.organizeHistory(tag);
    this.getGift(tag);
  }

  private async getGift(query: string) {
    const formedURL = `${URL}?api_key=${API_KEY}&q=${query}${PARAMS}`;

    // const resp = await fetch(formedURL);
    // const { data } = await resp.json();
    // this._gifs = data;

    this.http
      .get<GifsResponse>(formedURL)
      .subscribe((resp) => (this._gifs = resp.data));
  }
}
