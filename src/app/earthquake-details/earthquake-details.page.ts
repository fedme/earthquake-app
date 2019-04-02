import { Component, OnInit, Input } from '@angular/core';
import { Earthquake } from '../models/earthquake';
import { EarthquakeService } from '../services/earthquake.service';

@Component({
  selector: 'app-earthquake-details',
  templateUrl: './earthquake-details.page.html',
  styleUrls: ['./earthquake-details.page.scss'],
})
export class EarthquakeDetailsPage implements OnInit {

  @Input() earthquake: Earthquake;

  constructor(private eqs: EarthquakeService) { }

  ngOnInit() {
    this.fetchDetails();
  }

  async fetchDetails() {
    this.earthquake.details = await this.eqs.getEarthquakeDetails(this.earthquake.id);
  }

}
