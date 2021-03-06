import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BicyclesService} from "../../services/bicycles.service";
import {EquipmentService} from "../../services/equipment.service";
import {ScooterService} from "../../services/scooter.service";
import {SpareService} from "../../services/spare.service";
import {AccessoriesService} from "../../services/accessories.service";
import {ProductTypeDescriptionService} from "../../services/product-type-description.service";
import {ShoppingCartService} from "../../services/shopping-cart.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css', '../../app.component.css']
})
export class ProductPageComponent implements OnInit {
  requestParams = new Map();
  product: any;
  productGroup: any;
  productType: any;
  productTypeDescription: any;
  isImageLarge: boolean = false;
  productTitlePrefix: string = "";

  constructor(
    private route: ActivatedRoute,
    private productTypeDescriptionService: ProductTypeDescriptionService,
    private accessoriesService: AccessoriesService,
    private bicycleService: BicyclesService,
    private equipmentService: EquipmentService,
    private scooterService: ScooterService,
    private spareService: SpareService,
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (queryParam: any) => {
        this.productGroup = queryParam['productGroup'];
        this.productType = queryParam['type'];
        this.requestParams.set("ids",  queryParam['id']);
      }
    )

    if (this.productGroup === "BICYCLES") {
      this.productTitlePrefix = "Bicycle";
    } else if (this.productGroup === "SCOOTERS") {
      this.productTitlePrefix = "Scooter";
    } else {
      this.productTitlePrefix = this.productType.toLowerCase();
    }

    this.productTypeDescriptionService.getDescriptionByName(this.productGroup + "_" + this.productType)
      .pipe()
      .subscribe(res => {
        this.productTypeDescription = res;
      })

    switch (this.productGroup) {
      case "ACCESSORIES": {
        this.accessoriesService.getAccessories(this.requestParams)
          .pipe()
          .subscribe(res => {
            // @ts-ignore
            this.product = res[0];
          });
        break;
      }
      case "BICYCLES": {
        this.bicycleService.getBicycles(this.requestParams)
          .pipe()
          .subscribe(res => {
            // @ts-ignore
            this.product = res[0];
          });
        break;
      }
      case "EQUIPMENT": {
        this.equipmentService.getEquipment(this.requestParams)
          .pipe()
          .subscribe(res => {
            // @ts-ignore
            this.product = res[0];
          });
        break;
      }
      case "SCOOTERS": {
        this.scooterService.getScooters(this.requestParams)
          .pipe()
          .subscribe(res => {
            // @ts-ignore
            this.product = res[0];
          });
        break;
      }
      case "SPARES": {
        this.spareService.getSpares(this.requestParams)
          .pipe()
          .subscribe(res => {
            // @ts-ignore
            this.product = res[0];
          });
        break;
      }
    }
  }

  changeImageSize() {
    this.isImageLarge = !this.isImageLarge;
  }

  /**
   * Added product to product list in shopping cart service
   */
  addProductToShoppingCart(product: any, productGroup: string) {
    this.shoppingCartService.addProductToProductList(product, productGroup);
  }

}
