import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    return this.http.post('https://putsreq.com/0dBUWsuVq9q2jR7RTXQG', userSettings);
  }

  private putsReqResponse(request: any, response: any): any {
    var parsedBody = JSON.parse(request.body);

    parsedBody.id = Math.round(Math.random() * 1000);

    response.headers["Content-Type"] = "application/json";
    response.headers["X-Powered-By"] = "wow much code very cool wow";

    response.body = parsedBody;
  }
}
