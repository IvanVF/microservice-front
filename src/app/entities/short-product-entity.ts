import * as _ from "lodash";

export class ShortProductEntity {

  id: number;

  /**
   * Bicycles, scooters, accessories, sparks, equipment
   */
  productGroup: string;

  /**
   * Address of product image
   */
  imgAddr: string;

  /**
   * Product name
   */
  name: string;

  /**
   * Product price
   */
  price: number;

  /**
   * Product discount
   */
  discount: number;

  /**
   * Product description
   */
  description: string;

  /**
   * Number of one type products in shopping cart
   */
  productCount: number;

  constructor(id: number, productGroup: string, imgAddr: string, name: string, price: number, discount: number, description: string, productCount: number) {
    this.id = id;
    this.productGroup = productGroup;
    this.imgAddr = imgAddr;
    this.name = name;
    this.price = price;
    this.discount = discount;
    this.description = description;
    this.productCount = productCount;
  }
}
