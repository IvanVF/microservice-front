import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BicyclesService} from "../../services/bicycles/bicycles.service";
import {EquipmentService} from "../../services/equipment.service";
import {ScooterService} from "../../services/scooter.service";
import {SpareService} from "../../services/spare.service";
import {AccessoriesService} from "../../services/accessories.service";
import {ProductTypeDescriptionService} from "../../services/product-type-description.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  requestParams = new Map();
  product: any;
  productGroup: any;
  productType: any;
  productTypeDescription: any;

  constructor(
    private route: ActivatedRoute,
    private productDescriptionService: ProductTypeDescriptionService,
    private accessoriesService: AccessoriesService,
    private bicycleService: BicyclesService,
    private equipmentService: EquipmentService,
    private scooterService: ScooterService,
    private spareService: SpareService,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (queryParam: any) => {
        this.productGroup = queryParam['productGroup'];
        this.productType = queryParam['type'];
        this.requestParams.set("ids",  queryParam['id']);
      }
    )

    this.productDescriptionService.getDescriptionByName(this.productGroup + "_" + this.productType)
      .pipe()
      .subscribe(res => {
        this.productTypeDescription = res;
      })

    switch (this.productGroup) {
      case "ACCESSORIES": {
        this.accessoriesService.getAccessories(this.requestParams)
          .pipe()
          .subscribe(res => {
            this.product = res;
          })
      }
    }
    console.log("product: ", this.productGroup);
  }

}
