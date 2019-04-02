import { Component, OnInit } from '@angular/core';
import { EarthquakeService } from '../services/earthquake.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  lat = 25.544693;
  lng = -168.924479;
  zoom = 2.5;
  streetViewControl = false;

  constructor(public eqs: EarthquakeService) {}

  ngOnInit() {
    console.log(this.eqs.earthquakes);
    this.eqs.getAllEartquakes();
  }

}
