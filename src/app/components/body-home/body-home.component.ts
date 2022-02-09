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
import {FiltersService} from "../../services/filters.service";

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
   * Types of products in product group:
   * group BICYCLES - types: WOMAN, CHILDREN, OFFROAD e.t.c
   */
  productTypes: any;

  /**
   * Available manufacturers for chosen product type
   */
  manufacturers: any;

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
   * Filters for searching products
   */
  filters = {
    productGroup: "BICYCLES",
    productType: "",
    manufacturer: "",
    priceFrom: 0,
    priceTo: 0,
    isInStock: false,
    isHaveDiscount: false
  }

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
    private filtersService: FiltersService
  ) {
  }

  ngOnInit() {

    this.productTypes = [
      "WOMAN",
      "CHILDREN",
      "ROAD",
      "COMFORT",
      "GRAVEL"
    ]

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
   * Set value true for selected product group (bicycle, scooter e.t.c) in Map selectedItem
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
   * Load information for selected product group
   * in main page part
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

  /**
   * Load types of product group for filter
   */
  loadProductTypes() {
    this.filters.manufacturer = "";
    this.filtersService.loadProductTypes(this.filters.productGroup)
      .pipe()
      .subscribe((res) => {
        this.productTypes = res;
      });
  }

  /**
   * Load available manufacturers for chosen product type
   */
  loadManufacturers() {
    this.filters.manufacturer = "";
    this.filtersService.loadManufacturers(this.filters.productGroup, this.filters.productType)
      .pipe()
      .subscribe( res => {
        this.manufacturers = res;
      });
  }

  loadProductsWithFilters() {
    let params = new Map();
    params.set("productGroup", this.filters.productGroup);
    params.set("type", this.filters.productType.toUpperCase());
    params.set("manufacturer", this.filters.manufacturer);
    params.set("isInStock", this.filters.isInStock);
    params.set("isHaveDiscount", this.filters.isHaveDiscount);
    params.set("priceFrom", this.filters.priceFrom);
    params.set("priceTo", this.filters.priceTo);
    this.filtersService.loadProductsWithFilters(params)
      .pipe()
      .subscribe(res => {
        this.products = res;
      });
  }

  setProductType() {

  }

}
