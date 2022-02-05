import {Injectable} from '@angular/core';
import {ShortProductEntity} from "../entities/short-product-entity";
import {BehaviorSubject, Subject} from "rxjs";
import * as _ from "lodash";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  startEntity: ShortProductEntity[] = []

  /**
   * Array of products before new product will be added
   */
  productListOld: ShortProductEntity[] = [];

  /**
   * The list (array) of products, which customer add to shopping-cart
   */
  public productList = new BehaviorSubject<ShortProductEntity[]>(this.startEntity);

  constructor() {
  }

  addProductToProductList(product: any, productGroup: string) {
    let oldProductIndex = _.findIndex(this.productListOld, (productOld) => {
      return productOld.productGroup == productGroup && productOld.id == product.id;
    });
    if (oldProductIndex !== -1) {
      this.productListOld[oldProductIndex].productCount++;
    } else {
      let newProduct: ShortProductEntity = new ShortProductEntity(product.id, productGroup, product.imgAddr, product.name, product.price, product.discount, product.description.replace(/\r?\n/g, ""), 1);
      this.productListOld.push(newProduct);
    }

    this.productList.next(this.productListOld);
  }

}
