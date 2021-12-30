import { Component, OnInit } from '@angular/core';
import {BicycleEntity} from "../../services/bicycles/bicycle-entity";
import {BicyclesService} from "../../services/bicycles/bicycles.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-bicycles',
  templateUrl: './bicycles.component.html',
  styleUrls: ['./bicycles.component.css']
})
export class BicyclesComponent implements OnInit {
  bicycles: any;

  constructor(
    private bicycleService: BicyclesService,
    private route: ActivatedRoute
) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        let requestParams = new Map()
        if (this.route.snapshot.paramMap.get("type") != null) {
          requestParams.set("type", this.route.snapshot.paramMap.get("type"));
        }
        this.bicycleService.getBicycles(requestParams).subscribe(res => this.bicycles = res);
      });

  }

}
