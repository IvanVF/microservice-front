import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {BicycleEntity} from "../entities/bicycle-entity";
import {URLsService} from "./urls.service";

@Injectable({
  providedIn: 'root'
})
export class BicyclesService {
  bicycleURL: string = this.urlsService.microserviceBackCoreURL + "bicycles";

  constructor(
    private http: HttpClient,
    private urlsService: URLsService
  ) { }

  postBicycles(imageEntity: BicycleEntity): Observable<any> {
    return this.http.post(this.bicycleURL, imageEntity);
  }

  getBicycles(requestParams: Map<string, any>) {
    let params = new HttpParams();
    for (let param of requestParams.entries()) {
      params = params.append(param[0], param[1]);
    }
    return this.http.get(this.bicycleURL, {params});
  }
}
