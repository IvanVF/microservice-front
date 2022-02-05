import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from "../../services/shopping-cart.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  /**
   * Price of all products that wants to buy customer
   */
  totalPrice: number = 0;

  /**
   * Number of products in shopping cart (product list length)
   */
  productCount: number = 0;

  constructor(
    private shoppingCartService: ShoppingCartService
  ) {
  }

  ngOnInit(): void {
    this.shoppingCartService.productList.subscribe((productList) => {
      if (productList.length > 0) {
        this.totalPrice = 0;
        productList.forEach((product) => {
        this.totalPrice += product.price * product.productCount * (100 - product.discount) / 100;
        });
        this.productCount = productList.length;
      }
    })
  }
}
