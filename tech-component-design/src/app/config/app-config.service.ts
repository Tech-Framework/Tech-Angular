import { Injectable } from '@angular/core';
import { TimezoneService } from '@tech/tech-component/timezone/timezone.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  constructor(private httpClient: HttpClient, 
    private timezoneService: TimezoneService) { }

  initTimezone(): Promise<void> {
    let counter = 10;
    // alert('waiting to start application')
    const p = new Promise<void>((resolve)=>{
      this.timezoneService.setSystemTimezone({
        timezoneId: 'Europe/Paris'
      });
      resolve();
    });
    return p;
  }
}
