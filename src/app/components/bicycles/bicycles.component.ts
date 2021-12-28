import { Component, OnInit } from '@angular/core';
import {BicycleEntity} from "../../services/bicycles/bicycle-entity";
import {BicyclesService} from "../../services/bicycles/bicycles.service";

@Component({
  selector: 'app-bicycles',
  templateUrl: './bicycles.component.html',
  styleUrls: ['./bicycles.component.css']
})
export class BicyclesComponent implements OnInit {
  bicycles: any;

  constructor(
    private bicycleService: BicyclesService
  ) { }

  ngOnInit() {
    let requestParams = new Map()
    requestParams.set("type", "WOMAN");
    this.bicycleService.getBicycles(requestParams).subscribe(res => this.bicycles = res);
  }

}
