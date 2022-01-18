import { Component, OnInit } from '@angular/core';
import {SpareService} from "../../services/spare.service";
import {ActivatedRoute} from "@angular/router";
import {ProductTypeDescriptionService} from "../../services/product-type-description.service";

@Component({
  selector: 'app-spares',
  templateUrl: './spares.component.html',
  styleUrls: ['./spares.component.css', '../../app.component.css']
})
export class SparesComponent implements OnInit {
  spares: any;
  productType: any;
  productTypeDescription: any;

  constructor(
    private spareService: SpareService,
    private productTypeDescriptionService: ProductTypeDescriptionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.productType = this.route.snapshot.paramMap.get("type");
        let requestParams = new Map();
        if (this.productType != null) {
          requestParams.set("type", this.productType);
        }
        this.spareService.getSpares(requestParams).pipe().subscribe(res => this.spares = res);
        this.productTypeDescriptionService.getDescriptionByName("SPARES_" + this.productType)
          .pipe().subscribe(res => this.productTypeDescription = res);
      })
  }

}
