import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Incident } from 'src/app/interfaces/incident';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-incident-item',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './incident-item.component.html',
  styleUrls: ['./incident-item.component.css']
})
export class IncidentItemComponent {
  @Input() incident!: Incident;

  
  audio = new Audio('assets/arcade-coin.wav');

  onLinkClick() {
    this.audio.play();
  }
}
