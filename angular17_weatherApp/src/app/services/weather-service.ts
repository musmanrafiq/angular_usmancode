import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { WeatherModel } from '../models/weatherModel';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { 
  }

  get(query: string) : Observable<WeatherModel> {

    let url = `https://api.openweathermap.org/data/2.5/weather?appid=${environment.openWeatherKey}`;
    if(query){
      url = `${url}&q=${query}`; 
    }
    return this.httpClient.get<any>(url).pipe( map (res => (res.weather[0] as WeatherModel)));
  }
}


