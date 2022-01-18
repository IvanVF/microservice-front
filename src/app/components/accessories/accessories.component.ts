import {Component, OnInit} from '@angular/core';
import {AccessoriesService} from "../../services/accessories.service";
import {ActivatedRoute} from "@angular/router";
import {ProductTypeDescriptionService} from "../../services/product-type-description.service";

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css', '../../app.component.css']
})
export class AccessoriesComponent implements OnInit {

  accessories: any;
  productType: any;
  productTypeDescription: any;

  constructor(
    private accessoriesService: AccessoriesService,
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

        this.accessoriesService.getAccessories(requestParams).pipe().subscribe(res => this.accessories = res);
        this.productTypeDescriptionService.getDescriptionByName("ACCESSORIES_" + this.productType)
          .pipe().subscribe(res => this.productTypeDescription = res);
      }
    )
  }

}
