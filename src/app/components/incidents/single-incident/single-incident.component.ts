import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Incident } from 'src/app/interfaces/incident';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IncidentsService } from 'src/app/services/incidents.service';

@Component({
  selector: 'app-single-incident',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './single-incident.component.html',
  styleUrls: ['./single-incident.component.css']
})
export class SingleIncidentComponent {
  route:ActivatedRoute = inject(ActivatedRoute);
  incidentService = inject(IncidentsService);
  incident: Incident|undefined;
  
  constructor(){
    const incidentId = Number(this.route.snapshot.params['id']);
    this.incidentService.getIncidentById(incidentId).then(incident => {
      this.incident = incident;
    });
  }
  
  audio = new Audio('assets/arcade-coin.wav');

  onLinkClick() {
    this.audio.play();
  }

}
