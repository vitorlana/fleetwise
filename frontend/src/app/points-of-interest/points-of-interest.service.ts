import { PointOfInterest } from './../shared/model/point-of-interest.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class PointsOfInterestService {
  constructor(
    private constants: AppConstants,
    private http: HttpClient
  ) { }

  getPointsOfInterest(): Observable<PointOfInterest[]> {
    return this.http.get<PointOfInterest[]>(`${this.constants.API_ENDPOINT_BASE}${this.constants.API_ENDPOINT_POINTS_OF_INTEREST}`);
  }
}
