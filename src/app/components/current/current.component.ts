/**
 * A component designed to show information about the current weather
 *
 * @author Brandon Pfeiffer
 */
import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../../services/weather-api.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html'
})

export class CurrentComponent implements OnInit {
  currentWeather: any;
  loading: boolean;

  constructor(private was: WeatherApiService) {
    this.getCurrentWeather();
  }

  /**
   * After the view initializes, do the following
   */
  ngOnInit() {
    // When the zip changes on the WeatherApiService, get new currentWeather info
    this.was.changeZip.subscribe((newZip: number) => {
      if (newZip) {
        this.getCurrentWeather();
      }
    });
  }

  /**
   * Get the current weather information from the WeatherApiService
   */
  getCurrentWeather(): void {
    this.loading = true;
    this.was.current().then(res => {
      this.currentWeather = res;
      this.stopLoading();
    }, error => {
      console.log(error);
      this.stopLoading();
    });
  }

  /**
   * Set this.loading to false after 300 milliseconds
   *
   * We are creating a 300 second delay so that the user can see
   * some sort of feedback that new data has been loaded.  Else the
   * loading gif flashes too fast and the user has no idea anthing has changed.
   */
  stopLoading(): void {
    setTimeout(() => {
      this.loading = false;
    }, 300);
  }
}
