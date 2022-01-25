import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class URLsService {
  // Local microservice-back-core URL:
  // public microserviceBackCoreURL: string = "http://localhost:8341/";

  // Heroku microservice-back-core URL:
  public microserviceBackCoreURL: string = "https://bicycle-shop-back-core.herokuapp.com/";

  constructor() { }
}
