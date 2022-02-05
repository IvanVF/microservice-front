import {Injectable} from '@angular/core';
import {ShortProductEntity} from "../entities/short-product-entity";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  startEntity: ShortProductEntity[] = []

  /**
   * The list (array) of products, which customer add to shopping-cart
   */
  public productList = new BehaviorSubject<ShortProductEntity[]>(this.startEntity);

  constructor() {
  }


}
