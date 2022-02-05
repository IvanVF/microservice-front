import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../../services/shopping-cart.service";
import {ShortProductEntity} from "../../entities/short-product-entity";


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css', '../../app.component.css']
})
export class ShoppingCartComponent implements OnInit {

  /**
   * Array of products in ShoppingCars service which customer wont to buy
   */
  productList: Array<ShortProductEntity> = [];

  /**
   * Array of products before new product will be added
   */
  productListOld: ShortProductEntity[] = [];

  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit(): void {
    this.shoppingCartService.productList.subscribe(productList => {
      this.productList = productList;
    });
  }

}
