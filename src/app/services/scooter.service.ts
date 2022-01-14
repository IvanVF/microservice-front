import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {URLsService} from "./urls.service";

@Injectable({
  providedIn: 'root'
})
export class ScooterService {
  scooterURL: string = this.urlsService.microserviceBackCoreURL + "scooters";

  constructor(
    private http: HttpClient,
    private urlsService: URLsService
  ) { }

  getScooters(requestParams: Map<string, any>) {
    let params = new HttpParams();
    for (let param of requestParams.entries()) {
      params = params.append(param[0], param[1]);
    }

    return this.http.get(this.scooterURL, {params});
  }
}

