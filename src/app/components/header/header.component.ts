import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {ImageEntity} from "../../services/images/image-entity";

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
    let a=10;
    let b=11;
    //this.postImage().subscribe(value => {});

  }

  getUsers(): Observable<any> {
    return this.http.get("http://localhost:8200/users");
  }

  postImage(): Observable<any> {
    const body = {imgAddr: 123, description: "descr", type: "dont know"};
    return this.http.post("http://localhost:8200/image", body);
  }
}
