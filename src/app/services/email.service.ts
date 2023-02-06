import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private url = "https://mailthis.to/Hayden12667"

  constructor(public http: HttpClient) {}

  sendEmail(input: any) {
    console.log('running');
    
    return this.http.post(this.url, { email: 'westfallhayden@gmail.com', _subject: 'Test', message: 'message'}).subscribe(
        (response) => {
            if (response) {
              console.log('success');
              return response
            }
            console.log('error');
            
            return 'error'
        },
        (error) => {
          console.log(error);
          
        }
    );
  }
}
