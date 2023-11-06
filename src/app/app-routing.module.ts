import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListedIncidentsComponent } from './components/incidents/listed-incidents/listed-incidents.component';
import { SingleIncidentComponent } from './components/incidents/single-incident/single-incident.component';
import { SplashscreenComponent } from './components/other/splashscreen/splashscreen.component';
import { AppComponent } from './app.component';



const routes: Routes = [
  {
    path: 'splash',
    component: SplashscreenComponent,
    title: 'SplashScreen',
  },{ 
    path: '', 
    component:  ListedIncidentsComponent,
    title: 'Incidents'
  },{
    path: 'incident/:id',
    component: SingleIncidentComponent,
    title: 'Incident'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
