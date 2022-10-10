import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ILocationConfig } from './location-config';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class LocationConfigService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa('admin:admin'),
    }),
  };

  public resourceUrl = 'http://localhost:8080' + '/api/configs';

  constructor(protected http: HttpClient) {}

  getLocationConfig(): Observable<HttpResponse<ILocationConfig>> {
    return this.http.get<ILocationConfig>(this.resourceUrl + '/location', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('admin:admin'),
      },
      observe: 'response',
    });
  }

  saveLocationConfig(locationConfig: ILocationConfig):Observable<HttpResponse<ILocationConfig>>{
    return this.http.post<ILocationConfig>(this.resourceUrl + "/location", locationConfig, {observe: 'response'});
  }

}
