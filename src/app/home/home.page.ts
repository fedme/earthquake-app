import { Component, OnInit } from '@angular/core';
import { EarthquakeService } from '../services/earthquake.service';
import { Earthquake } from '../models/earthquake';
import { ModalController } from '@ionic/angular';
import { EarthquakeDetailsPage } from '../earthquake-details/earthquake-details.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  defaultLatitude = 25.544693;
  defaultLongitude = -168.924479;
  defaultZoom = 2.5;
  streetViewControl = false;

  constructor(
    public eqs: EarthquakeService,
    private modalCtl: ModalController
    ) { }

  ngOnInit() {
    this.eqs.getAllEartquakes();
  }

  async markerClicked(earthquake: Earthquake) {

    console.log('marker clicked');

    // Create earthquake details modal
    const modal = await this.modalCtl.create({
      component: EarthquakeDetailsPage,
      componentProps: { earthquake }
    });
    return await modal.present();
  }

}
