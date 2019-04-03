import { Component, OnInit, Input } from '@angular/core';
import { Earthquake } from '../models/earthquake';
import { EarthquakeService } from '../services/earthquake.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-earthquake-details',
  templateUrl: './earthquake-details.page.html',
  styleUrls: ['./earthquake-details.page.scss'],
})
export class EarthquakeDetailsPage implements OnInit {

  @Input() earthquake: Earthquake;

  constructor(
    private eqs: EarthquakeService,
    private modalCtl: ModalController
    ) { }

  ngOnInit() {
    this.fetchDetails();
  }

  async fetchDetails() {
    this.earthquake.details = await this.eqs.getEarthquakeDetails(this.earthquake.id);
  }

  close() {
    this.modalCtl.dismiss();
  }

}
