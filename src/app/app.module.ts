import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CurrentComponent } from './components/current/current.component';
import { WeatherApiService } from './services/weather-api.service';
import { TempPipe } from './pipes/temp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CurrentComponent,
    TempPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    WeatherApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
