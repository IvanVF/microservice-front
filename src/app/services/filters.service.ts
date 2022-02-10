import { Injectable } from '@angular/core';
import {BicyclesService} from "./bicycles.service";
import {ScooterService} from "./scooter.service";
import {AccessoriesService} from "./accessories.service";
import {EquipmentService} from "./equipment.service";
import {SpareService} from "./spare.service";
import {URLsService} from "./urls.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {ShortProductEntity} from "../entities/short-product-entity";

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor( private bicycleService: BicyclesService,
               private scooterService: ScooterService,
               private accessoriesService: AccessoriesService,
               private equipmentService: EquipmentService,
               private spareService: SpareService,
               private urlService: URLsService,
               private http: HttpClient) { }

  /**
   * The list (array) of products, loaded by search string
   */
  public searchStringResponse = new BehaviorSubject<any[]>([]);

  /**
   * Load types of product group for filter
   */
  loadProductTypes(productGroup: string) {
    return this.http.get(this.urlService.microserviceBackCoreURL + productGroup.toLowerCase() + "/types");
  }

  /**
   * Load manufacturers for chosen product type
   */
  loadManufacturers(productGroup: string, productType: string) {
    let params = new HttpParams();
    params = params.append("type", productType);
    return this.http.get(this.urlService.microserviceBackCoreURL + productGroup.toLowerCase() + "/manufacturers", {params})
  }

  /**
   * Load products with selected filters
   */
  loadProductsWithFilters(requestParams: Map<string, any>) {
    let params = new HttpParams();
    for (let param of requestParams.entries()) {
      params = params.append(param[0], param[1]);
    }

    return this.http.get(this.urlService.microserviceBackCoreURL + requestParams.get("productGroup").toLowerCase(), {params});
  }

  /**
   * Load bicycles by name using search string
   */
  loadProductsWithSearchString(searchString: string) {
    let params = new HttpParams();
      params = params.append("searchString", searchString);

    return this.http.get(this.urlService.microserviceBackCoreURL + "bicycles" + "/search_string", {params});
  }



}
