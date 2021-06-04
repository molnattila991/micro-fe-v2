import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from "moment";
import { tap, map,  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthHandlerService {
  constructor(private http: HttpClient) {

  }

  login(email:string, password:string) {
      return this.http.post('http://almatest.westeurope.cloudapp.azure.com:19999/api/auth/user/token', {email, password})
            .pipe(
                tap(() => this.setSession),
            );
  }
        
  private setSession(authResult: any) {
      const expiresAt = moment().add(authResult.expiresIn,'second');

      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }          

  logout() {
      localStorage.removeItem("id_token");
      localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
      return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }

  getExpiration() {
      const expiration: any = localStorage.getItem("expires_at");
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
  }    
}
