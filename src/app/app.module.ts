import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppRoutingModule } from './app-routing.module';
import { ListedIncidentsComponent } from './components/incidents/listed-incidents/listed-incidents.component';
import { SingleIncidentComponent } from './components/incidents/single-incident/single-incident.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ListedIncidentsComponent,
    SingleIncidentComponent,
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
