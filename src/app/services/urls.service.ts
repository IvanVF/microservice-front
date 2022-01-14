import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class URLsService {
  public microserviceBackCoreURL: string = "http://localhost:8200/";

  constructor() { }
}
