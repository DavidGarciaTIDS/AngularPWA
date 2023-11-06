import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Incident } from 'src/app/interfaces/incident';
import { IncidentsService } from 'src/app/services/incidents.service';
import { IncidentItemComponent } from '../incident-item/incident-item.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listed-incidents',
  standalone: true,
  imports: [CommonModule, IncidentItemComponent, RouterModule],
  templateUrl: './listed-incidents.component.html',
  styleUrls: ['./listed-incidents.component.css']
})
export class ListedIncidentsComponent {
  incidentList: Incident[] = [];
  incidentService: IncidentsService = inject(IncidentsService);

  constructor() {
    this.incidentService.getAllIncidents().then((incidentList: Incident[]) => {
      this.incidentList = incidentList
    });
  }

  showNotification() {
    // Verificar si el navegador admite las notificaciones
    if ('Notification' in window) {
      // Solicitar permiso al usuario para mostrar notificaciones
      Notification.requestPermission()
        .then(permission => {
          if (permission === 'granted') {
            // Crear una nueva notificación
            const notification = new Notification('Título de la notificación', {
              body: 'Contenido de la notificación',
              icon: 'assets/icons/icon-128x128.png' // Opcional: agregar una imagen a la notificación
            });

            // Agregar un evento de clic a la notificación
            notification.addEventListener('click', () => {
              // Acción a realizar cuando se hace clic en la notificación
              console.log('La notificación fue clicada');
            });
          }
        })
        .catch(error => {
          console.error('Error al solicitar permiso para mostrar notificaciones:', error);
        });
    }

  }
}
