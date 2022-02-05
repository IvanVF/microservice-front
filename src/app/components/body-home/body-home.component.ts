import {Component, OnInit} from "@angular/core";
import {BicyclesService} from "../../services/bicycles.service";
import {ScooterService} from "../../services/scooter.service";
import {AccessoriesService} from "../../services/accessories.service";
import {EquipmentService} from "../../services/equipment.service";
import {SpareService} from "../../services/spare.service";
import {ShoppingCartService} from "../../services/shopping-cart.service";
import {ShortProductEntity} from "../../entities/short-product-entity";
import * as _ from "lodash";
import {Subject} from "rxjs";

@Component({
  selector: 'app-body-home',
  templateUrl: 'body-home.component.html',
  styleUrls: ['body-home.component.css', '../../app.component.css']
})
export class BodyHomeComponent implements OnInit {

  /**
   * Array of products of chosen product group: bicycles, scooters e.t.c.
   */
  products: any;

  /**
   * Name of product group: BICYCLES, SCOOTERS, ACCESSORIES e.t.c.
   */
  productGroup: string = "";

  /**
   * Parameters for GET request
   */
  requestParams = new Map();

  /**
   * Array of products in ShoppingCars service which customer wont to buy
   */
  productList = this.shoppingCartService.productList;

  /**
   * Array of products before new product will be added
   */
  productListOld: ShortProductEntity[] = [];

  /**
   * Map that response for chosen product group. Products of chosen group (true) loads in GET request
   */
  selectedItem = new Map<string, boolean> ([
    ["BICYCLES", false],
    ["SCOOTERS", false],
    ["ACCESSORIES", false],
    ["EQUIPMENT", false],
    ["SPARES", false],
  ]);

  constructor(
    private bicycleService: BicyclesService,
    private scooterService: ScooterService,
    private accessoriesService: AccessoriesService,
    private equipmentService: EquipmentService,
    private spareService: SpareService,
    private shoppingCartService: ShoppingCartService,
  ) {
  }

  ngOnInit() {

    this.bicycleService.getBicycles(this.requestParams)
      .pipe()
      .subscribe(res => {
        this.products = res;
        this.selectedItem.set("BICYCLES", true)
        this.productGroup = "BICYCLES";
      });

    this.productList.subscribe(prList => {
      this.productListOld = prList;
      console.log("onInit: ", prList.length);
    });
  }

  /**
   * Set value true for selected item (bicycle, scooter e.t.c) in Map selectedItem
   * @param itemType
   */
  refreshItemType(itemType: string) {
    for (let key of this.selectedItem.keys()) {
      this.selectedItem.set(key, false);
    }
    this.productGroup = itemType;
      this.selectedItem.set(itemType, true);
  }

  /**
   * Load information for selected item
   * and set item selected
   * @param itemType
   */
  changeProductGroup(productGroup: string) {
    this.refreshItemType(productGroup);
    switch (productGroup) {
      case "BICYCLES": {
        this.bicycleService.getBicycles(this.requestParams)
          .pipe()
          .subscribe(res => {
            this.products = res;
          });
        break;
      }
      case "SCOOTERS": {
        this.scooterService.getScooters(this.requestParams)
          .pipe()
          .subscribe(res => {
            this.products = res;
          })
        break;
      }
      case "ACCESSORIES": {
        this.accessoriesService.getAccessories(this.requestParams)
          .pipe()
          .subscribe(res => {
            this.products = res;
          })
        break;
      }
      case "EQUIPMENT": {
        this.equipmentService.getEquipment(this.requestParams)
          .pipe()
          .subscribe(res => {
            this.products = res;
          })
        break;
      }
      case "SPARES": {
        this.spareService.getSpares(this.requestParams)
          .pipe()
          .subscribe(res => {
            this.products = res;
          })
        break;
      }
      default: {
        console.log("Invalid choice");
        break;
      }
    }
  }

  /**
   * Add product information to array "productList" in ShoppingCart service
   */
  addItemToProductCart(item: any, productGroup: string) {
    let oldProductIndex = _.findIndex(this.productListOld, (product) => {
      return product.productGroup == productGroup && product.id == item.id;
    });
    if (oldProductIndex !== -1) {
      this.productListOld[oldProductIndex].productCount++;
    } else {
      let product: ShortProductEntity = new ShortProductEntity(item.id, productGroup, item.imgAddr, item.name, item.price, item.discount, item.description.replace(/\r?\n/g, ""), 1);
      this.productListOld.push(product);
    }

    this.productList.next(this.productListOld);
  }

}
