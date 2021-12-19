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
  }

  getUsers(): Observable<any> {
    return this.http.get("http://localhost:8200/users")
  }
}
