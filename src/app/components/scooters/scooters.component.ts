import { Component, OnInit } from '@angular/core';
import {ScooterService} from "../../services/scooter.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-scooters',
  templateUrl: './scooters.component.html',
  styleUrls: ['./scooters.component.css', '../../app.component.css']
})
export class ScootersComponent implements OnInit {

  scooters: any;

  constructor(
    private scooterService: ScooterService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      let requestParams = new Map();
      if (this.route.snapshot.paramMap.get("type") != null) {
        requestParams.set("type", this.route.snapshot.paramMap.get("type"));
      }
      this.scooterService.getScooters(requestParams).subscribe(res => this.scooters = res);
    })
  }

}
