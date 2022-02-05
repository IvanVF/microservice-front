import { Component, OnInit } from '@angular/core';
import {ScooterService} from "../../services/scooter.service";
import {ActivatedRoute} from "@angular/router";
import {ProductTypeDescriptionService} from "../../services/product-type-description.service";
import {ShoppingCartService} from "../../services/shopping-cart.service";

@Component({
  selector: 'app-scooters',
  templateUrl: './scooters.component.html',
  styleUrls: ['./scooters.component.css', '../../app.component.css']
})
export class ScootersComponent implements OnInit {

  scooters: any;
  productType: any;
  productTypeDescription: any;

  constructor(
    private scooterService: ScooterService,
    private productTypeDescriptionService: ProductTypeDescriptionService,
    private shoppingCartService: ShoppingCartService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.productType = this.route.snapshot.paramMap.get("type");
      let requestParams = new Map();
      if (this.productType != null) {
        requestParams.set("type", this.productType);
      }

      this.scooterService.getScooters(requestParams).pipe().subscribe(res => this.scooters = res);
      this.productTypeDescriptionService.getDescriptionByName("SCOOTERS_" + this.productType)
        .pipe().subscribe(res => this.productTypeDescription = res);
    })
  }

  /**
   * Added product to product list in shopping cart service
   */
  addProductToShoppingCart(product: any, productGroup: string) {
    this.shoppingCartService.addProductToProductList(product, productGroup);
  }

}
