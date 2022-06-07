import {Component, OnInit} from '@angular/core';
import {AuthorisationService} from "../../services/authorisation.service";
import {AuthResponse} from "../../entities/auth-response";

@Component({
  selector: 'app-autharisation',
  templateUrl: './authorisation.component.html',
  styleUrls: ['./authorisation.component.css']
})
export class AuthorisationComponent implements OnInit {
  password: string = "";
  username: string = "";
  authResponse: any;
  authToken: string = "";


  constructor(
    private authService: AuthorisationService,
  ) { }

  async login(username: string, password: string) {
    await this.authService.login(username, password).pipe().subscribe(res => this.authResponse = res);
    this.authToken = this.authResponse.token;
    let a = "43";
  }

  ngOnInit(): void {
  }

}
