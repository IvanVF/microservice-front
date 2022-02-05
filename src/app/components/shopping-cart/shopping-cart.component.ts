import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../../services/shopping-cart.service";
import {ShortProductEntity} from "../../entities/short-product-entity";
import * as _ from "lodash";


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
   * Total cost of all products before delivery cost calculation with taking into account discounts
   */
  totalCostWithoutDelivery: number = 0;

  /**
   * Total cost of all products with delivery cost and with taking into account discounts
   */
  totalCost: number = 0;

  /**
   * Total sum of discounts
   */
  customerEconomyOnDiscounts: number = 0;


  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit(): void {
    this.shoppingCartService.productList.subscribe(productList => {
      let costWithoutDiscount = 0;
      this.productList = productList;
      this.totalCostWithoutDelivery = 0;
      this.productList.forEach((product) => {
        this.totalCostWithoutDelivery += product.price * product.productCount * (100 - product.discount) / 100;
        costWithoutDiscount += product.price * product.productCount;
      })
      this.totalCost = this.totalCostWithoutDelivery * 1.15;
      this.customerEconomyOnDiscounts = costWithoutDiscount - this.totalCostWithoutDelivery;

    });
  }

  /**
   * Increase product count of one type product (in ShortProductEntity)
   */
  increaseProductCount(product: ShortProductEntity) {
    let productIndex = _.findIndex(this.productList, (productOld) => {
      return productOld.productGroup == product.productGroup && productOld.id == product.id;
    });
    this.productList[productIndex].productCount++;
    this.shoppingCartService.productList.next(this.productList);
  }

  /**
   * Decrease product count of one type product (in ShortProductEntity)
   */
  decreaseProductCount(product: ShortProductEntity) {
    if (product.productCount > 1) {
      let productIndex = _.findIndex(this.productList, (productOld) => {
        return productOld.productGroup == product.productGroup && productOld.id == product.id;
      });
      this.productList[productIndex].productCount--;
      this.shoppingCartService.productList.next(this.productList);
    }
  }

}
