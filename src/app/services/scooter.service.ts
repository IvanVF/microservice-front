import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ScooterService {
  scooterURL: string = "http://localhost:8200/scooters";

  constructor(
    private http: HttpClient
  ) { }

  getScooters(requestParams: Map<string, any>) {
    let params = new HttpParams();
    for (let param of requestParams.entries()) {
      params = params.append(param[0], param[1]);
    }

    return this.http.get(this.scooterURL, {params});
  }
}

