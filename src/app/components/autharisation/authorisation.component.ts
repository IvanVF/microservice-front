import {Component, OnInit} from '@angular/core';
import {AuthorisationService} from "../../services/authorisation.service";
import jwtDecode, {JwtPayload} from "jwt-decode";
import {AuthResponse} from "../../entities/auth-response";

@Component({
  selector: 'app-autharisation',
  templateUrl: './authorisation.component.html',
  styleUrls: ['./authorisation.component.css']
})
export class AuthorisationComponent implements OnInit {
  password: string = "";
  username: string = "";
  authToken: string = "";


  constructor(
    private authService: AuthorisationService,
  ) {
  }

  ngOnInit(): void {
  }

  async login(username: string, password: string) {
    let authResp: AuthResponse = await this.authService.login("superadmin", "100");
    this.authToken = authResp.token;
    let tokenPayload = jwtDecode<JwtPayload>(this.authToken);
  }
}
