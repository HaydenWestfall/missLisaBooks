import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { map } from 'rxjs';

@Service()
export class EmailService {
  http = inject(HttpClient);

  private url = "https://mailthis.to/Hayden12667"

  sendEmail(input: any) {
    console.log('running');
    
    return this.http.post(this.url, { email: 'misslisabooks@gmail.com', _subject: 'Test', message: 'message'}).subscribe(
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
