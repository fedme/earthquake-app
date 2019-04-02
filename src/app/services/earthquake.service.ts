import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Earthquake } from '../models/earthquake';
import { EarthquakesFeed } from '../models/earthquakes-feed';
import { EarthquakeDetails } from '../models/earthquake-details';

@Injectable({
  providedIn: 'root'
})
export class EarthquakeService {

  private readonly apiUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0';
  public earthquakes: Earthquake[] = [];


  constructor(private http: HttpClient) {
    this.updateEartquakesList();
  }


  public async updateEartquakesList() {
    this.earthquakes = await this.getAllEartquakes();
  }


  public async getAllEartquakes(): Promise<Earthquake[]> {

    let earthquakes: Earthquake[] = [];
    const url = `${this.apiUrl}/summary/all_day.geojson`;
    const callbackName = 'eqfeed_callback';

    try {
      // TODO: why does the API return 403 is the jsonp callback param is supplied?
      // const feed = await this.http.jsonp<EarthquakeFeed>(url, callbackName).toPromise();
      const feed = await this.http.get<EarthquakesFeed>(url).toPromise();
      earthquakes = feed.features.map(earthquake => new Earthquake(earthquake));

    } catch (error) {
      console.log('Error while retrieving eartquakes', error);
    }

    return earthquakes;
  }


  public async getEarthquakeDetails(id: string): Promise<EarthquakeDetails> {

    let earthquakeDetails: EarthquakeDetails = null;
    const url = `${this.apiUrl}/detail/${id}.geojson`;

    try {
      const details = await this.http.get(url).toPromise();
      earthquakeDetails = new EarthquakeDetails(details);
    } catch (error) {
      console.log('Error while retrieving eartquake details', error);
    }

    return earthquakeDetails;

  }

}
