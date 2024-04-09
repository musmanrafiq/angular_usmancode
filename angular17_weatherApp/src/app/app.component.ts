import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { WeatherService} from './services/weather-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'angular17_weatherApp';
  searchQuery : string = '';
  weatherDetail: string = '';

  constructor(private weatherService: WeatherService){}

  searchWeather = () => {
    this.weatherDetail = "Weather details."

    this.weatherService.get(this.searchQuery).subscribe((results) => {
      console.log(results)

      this.weatherDetail = `Its ${results.main} and overall its ${results.description}`
    });
  }
}
