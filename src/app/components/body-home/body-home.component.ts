import {Component, OnInit} from "@angular/core";
import {BicyclesService} from "../../services/bicycles/bicycles.service";
import {ScooterService} from "../../services/scooter.service";
import {AccessoriesService} from "../../services/accessories.service";
import {EquipmentService} from "../../services/equipment.service";

@Component({
  selector: 'app-body-home',
  templateUrl: 'body-home.component.html',
  styleUrls: ['body-home.component.css']
})
export class BodyHomeComponent implements OnInit {
  items: any;
  requestParams = new Map();
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
    private equipmentService: EquipmentService
  ) {
  }

  ngOnInit() {

    this.bicycleService.getBicycles(this.requestParams)
      .pipe()
      .subscribe(res => {
        this.items = res;
        this.selectedItem.set("BICYCLES", true)
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
    this.selectedItem.set(itemType, true);
  }

  /**
   * Load information for selected item
   * and set item selected
   * @param itemType
   */
  changeItems(itemType: string) {
    this.refreshItemType(itemType);
    switch (itemType) {
      case "BICYCLES": {
        this.bicycleService.getBicycles(this.requestParams)
          .pipe()
          .subscribe(res => {
            this.items = res;
          });
        break;
      }
      case "SCOOTERS": {
        this.scooterService.getScooters(this.requestParams)
          .pipe()
          .subscribe(res => {
            this.items = res;
          })
        break;
      }
      case "ACCESSORIES": {
        this.accessoriesService.getAccessories(this.requestParams)
          .pipe()
          .subscribe(res => {
            this.items = res;
          })
        break;
      }
      case "EQUIPMENT": {
        this.equipmentService.getEquipment(this.requestParams)
          .pipe()
          .subscribe(res => {
            this.items = res;
          })
        break;
      }
      case "SPARES": {
        console.log("switched to spares");
        break;
      }
      default: {
        console.log("Invalid choice");
        break;
      }
    }
  }

}
