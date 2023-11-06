import { Injectable } from '@angular/core';
import { Incident } from '../interfaces/incident';

@Injectable({
  providedIn: 'root'
})
export class IncidentsService {
  apiUrl = 'https://garcia.terrabyteco.com/api';

  protected incidentList: Incident[] = [];

   constructor() { }
 
   async getAllIncidents(): Promise<Incident[]> {
     // this.incidentList=this.http.get<Incident[]>(`${this.apiUrl}/incidents`);
     const data = await fetch(`${this.apiUrl}/incidents`);
     this.incidentList= await data.json() ?? [];
     return await this.incidentList;
     // return this.incidentList;
     
   }
 
   async getIncidentById(id: Number):Promise<Incident|undefined> {
     // const data = await fetch(`${this.apiUrl}/incidents/{id}`);
     // return await data.json() ?? {}
     
     return this.incidentList.find(Incident => Incident.id === id);
 }
 
 submitIncident(title: string, status: number, description: string){
     console.log(title, status, description);
 }
 
}
