import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {URLsService} from "./urls.service";


@Injectable({
  providedIn: 'root'
})
export class AuthorisationService {
  bicycleURL: string = this.urlService.microserviceBackCoreURL + "bicycles";
  authUrl: string = this.urlService.microserviceBackCoreURL + "auth/";
  password: string = "";
  username: string = "";

  constructor(
    private http: HttpClient,
    private urlService: URLsService
  ) { }

  login(username: string, password: string) {
    return this.http.post(this.authUrl + "login", {username: "superadmin", password: "100"});
  }
}
