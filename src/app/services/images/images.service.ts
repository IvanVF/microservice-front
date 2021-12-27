import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ImageEntity} from "./image-entity";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  imagesURL: string = "http://localhost:8200/images";

  constructor(
    private http: HttpClient
  ) { }

  postImage(imageEntity: ImageEntity): Observable<any> {
    return this.http.post(this.imagesURL, imageEntity);
  }

  getImages(requestParams: Map<string, any>) {
    let params = new HttpParams();
    for (let param of requestParams.entries()) {
      params = params.append(param[0], param[1]);
    }
    return this.http.get(this.imagesURL, {params});
  }
}
