import { Component, OnInit } from '@angular/core';
import {SpareService} from "../../services/spare.service";
import {ActivatedRoute} from "@angular/router";
import {ProductTypeDescriptionService} from "../../services/product-type-description.service";
import {ShoppingCartService} from "../../services/shopping-cart.service";

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
    private shoppingCartService: ShoppingCartService,
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

  /**
   * Added product to product list in shopping cart service
   */
  addProductToShoppingCart(product: any, productGroup: string) {
    this.shoppingCartService.addProductToProductList(product, productGroup);
  }

}
