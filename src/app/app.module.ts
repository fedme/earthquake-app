import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';
import { EarthquakeDetailsPageModule } from './earthquake-details/earthquake-details.module';
import { EarthquakeDetailsPage } from './earthquake-details/earthquake-details.page';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [
    EarthquakeDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    IonicModule.forRoot(),
    EarthquakeDetailsPageModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBiCdbK-BivQo4RqzqrxH8r09JOUOqJZU0' // TODO: remove api key
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
