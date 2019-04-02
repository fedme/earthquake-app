import { Component, OnInit, OnDestroy } from '@angular/core';
import { EarthquakeService } from '../services/earthquake.service';
import { Earthquake } from '../models/earthquake';
import { ModalController, ToastController } from '@ionic/angular';
import { EarthquakeDetailsPage } from '../earthquake-details/earthquake-details.page';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  private alive = true;
  private readonly refreshInterval = 60000;
  defaultLatitude = 25.544693;
  defaultLongitude = -168.924479;
  defaultZoom = 2.5;
  streetViewControl = false;

  constructor(
    public eqs: EarthquakeService,
    private modalCtl: ModalController,
    private toastCtl: ToastController
  ) { }

  ngOnInit() {
    // Refresh earthquakes list periodically
    interval(this.refreshInterval)
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => {
        this.refreshEarthquakes();
      });
  }

  async refreshEarthquakes() {
    const toast = await this.toastCtl.create({
      message: 'Refreshing list of earthquakes...',
      duration: 2000
    });
    toast.present();
    this.eqs.updateEartquakesList();
  }

  async markerClicked(earthquake: Earthquake) {
    // Create earthquake details modal
    const modal = await this.modalCtl.create({
      component: EarthquakeDetailsPage,
      componentProps: { earthquake }
    });
    return await modal.present();
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
