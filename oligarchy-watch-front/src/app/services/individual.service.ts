import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OWIndividual } from '../entities/OWIndividual';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IndividualService {

  individualsUrl = `${environment.baseUrl}/individuals`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<OWIndividual[]> {
    return this.http.get<any>(this.individualsUrl);
  }

  add(individual: OWIndividual): Observable<OWIndividual> {
    return this.http.post<OWIndividual>(this.individualsUrl, individual);
  }
}
