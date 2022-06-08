import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {URLsService} from "./urls.service";
import {AuthResponse} from "../entities/auth-response";


@Injectable({
  providedIn: 'root'
})
export class AuthorisationService {
  authUrl: string = this.urlService.microserviceBackCoreURL + "auth/";

  constructor(
    private http: HttpClient,
    private urlService: URLsService
  ) { }

  async login(username: string, password: string): Promise<AuthResponse> {
    const resp = await fetch(this.authUrl + "login", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then(data => data.json());

    return new AuthResponse(resp.token, resp.username);
  }
}

interface Response {
  username: string,
  token: string
}
