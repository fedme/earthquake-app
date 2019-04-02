import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Earthquake } from '../models/earthquake';
import { EarthquakeFeed } from '../models/earthquake-feed';

@Injectable({
  providedIn: 'root'
})
export class EarthquakeService {

  private readonly apiUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0';
  public updatedAt: Date;
  public earthquakes: Earthquake[] = [];

  constructor(private http: HttpClient) {
    this.updateEartquakesList();
  }

  public async updateEartquakesList() {
    this.earthquakes = await this.getAllEartquakes();
  }

  public async getAllEartquakes(): Promise<Earthquake[]> {

    let earthquakes: Earthquake[] = [];

    try {

      const url = `${this.apiUrl}/summary/all_day.geojson`;
      const callbackName = 'eqfeed_callback ';

      // TODO: why does the API return 403 is the jsonp callback param is supplied?
      // const feed = await this.http.jsonp<EarthquakeFeed>(url, callbackName).toPromise();

      const feed = await this.http.get<EarthquakeFeed>(url).toPromise();
      console.log('Retrieved earthquakes feed', feed);

      earthquakes = feed.features.map(earthquake => new Earthquake(earthquake));
      console.log('Retrieved earthquakes', earthquakes);

    } catch (error) {
      console.log('Error while retrieving eartquakes', error);
    }

    return earthquakes;
  }

}
