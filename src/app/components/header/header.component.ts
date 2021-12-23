import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getUsers().subscribe(value => {});
    console.log("users: ", this.getUsers().subscribe(value => {}));
    //this.getImage().subscribe((data:any) => this.imageEntity = new ImageEntity(data.id, data.imageBlob, data.description, data.type));
    let a=10;
    let b=11;
    this.postImage().subscribe(value => {});
  }

  getUsers(): Observable<any> {
    return this.http.get("http://localhost:8200/users");
  }

  getImage(): Observable<any> {
    return this.http.get("http://localhost:8200/image?id=2");
  }

  postImage(): Observable<any> {
    const body = {imgAddr: 123, description: "descr", type: "dont know"};
    return this.http.post("http://localhost:8200/image", body);
  }
}
