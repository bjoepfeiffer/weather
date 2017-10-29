/**
 * A service to centralize the variables and functions needed to retrieve data from the openweathermap api
 *
 * @author Brandon Pfeiffer
 */
import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class WeatherApiService {
  zip = 44111;
  countryCode = 'us';
  appID = '111f737ff720a125a826898f3c9b4484';
  apiURL = 'http://samples.openweathermap.org/data/2.5/weather?';
  changeZip: EventEmitter<number> = new EventEmitter();
  tempUnit: string;

  constructor(private http: Http) {
    // Listen to this.changeZip and change this.zip to the new value if one is given
    this.changeZip.subscribe((newZip: number) => {
      if (newZip) {
        this.zip = newZip;
      }
    });
    this.tempUnit = 'f';
  }

  /**
   * Grab the current weather for this.zip
   */
  current(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.get(`${this.apiURL}zip=${this.zip},${this.countryCode}&appid=${this.appID}`).subscribe(res => {
        resolve(res.json());
      }, error => {
        console.log(`Error getting current weather: ${error}`);
        reject(error);
      });
    });
  }
}
