import { Injectable } from '@angular/core';
import {URLsService} from "./urls.service";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  equipmentUrl = this.urlsService.microserviceBackCoreURL + "equipment";

  constructor(
    private urlsService: URLsService,
    private http: HttpClient
  ) { }

  getEquipment(requestParams: Map<string, any>) {
    let params = new HttpParams();
    for (let param of requestParams.entries()) {
      params = params.append(param[0], param[1]);
    }

    return this.http.get(this.equipmentUrl, {params})
  }
}
