import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {URLsService} from "./urls.service";

@Injectable({
  providedIn: 'root'
})
export class ProductTypeDescriptionService {
  productTypeDescriptionURL: string = this.urlsService.microserviceBackCoreURL + "product_type_description";

  constructor(
    private http: HttpClient,
    private urlsService: URLsService
  ) { }

  getDescriptionByName(typeName: string) {
    let params = new HttpParams();
    params = params.append("name", typeName);
    return this.http.get(this.productTypeDescriptionURL, {params});
  }

}
