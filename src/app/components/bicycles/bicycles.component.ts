import { Component, OnInit } from '@angular/core';
import {BicyclesService} from "../../services/bicycles.service";
import {ActivatedRoute} from "@angular/router";
import {ProductTypeDescriptionService} from "../../services/product-type-description.service";

@Component({
  selector: 'app-bicycles',
  templateUrl: './bicycles.component.html',
  styleUrls: ['./bicycles.component.css', '../../app.component.css']
})
export class BicyclesComponent implements OnInit {
  bicycles: any;
  bicycleType: any;
  productTypeDescription: any;

  constructor(
    private bicycleService: BicyclesService,
    private productTypeDescriptionService: ProductTypeDescriptionService,
    private route: ActivatedRoute
) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.bicycleType = this.route.snapshot.paramMap.get("type");
        let requestParams = new Map();
        if (this.bicycleType != null) {
          requestParams.set("type", this.bicycleType);
        }

        this.bicycleService.getBicycles(requestParams).pipe().subscribe(res => this.bicycles = res);
        this.productTypeDescriptionService.getDescriptionByName("BICYCLES_" + this.bicycleType)
          .pipe().subscribe(res => this.productTypeDescription = res);
      });

  }

}
