import { Component, OnInit } from '@angular/core';
import {EquipmentService} from "../../services/equipment.service";
import {ActivatedRoute} from "@angular/router";
import {ProductTypeDescriptionService} from "../../services/product-type-description.service";

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css', '../../app.component.css']
})
export class EquipmentsComponent implements OnInit {
  equipments: any;
  productType: any;
  productTypeDescription: any;

  constructor(
    private equipmentService: EquipmentService,
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

        this.equipmentService.getEquipment(requestParams).pipe().subscribe(res => this.equipments = res);
        this.productTypeDescriptionService.getDescriptionByName("EQUIPMENT_" + this.productType)
          .pipe().subscribe(res => this.productTypeDescription = res);
      })
  }

}
