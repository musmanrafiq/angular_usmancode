import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { 
  }

  get() : Observable<any> {
    return this.httpClient.get<any>("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=0d4427639c7906727e5f139790c3d000");
  }
}
