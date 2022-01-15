import { Component, OnInit } from '@angular/core';
import {EquipmentService} from "../../services/equipment.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css', '../../app.component.css']
})
export class EquipmentsComponent implements OnInit {
  equipments: any;

  constructor(
    private equipmentService: EquipmentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        let requestParams = new Map();
        if (this.route.snapshot.paramMap.get("type") != null) {
          requestParams.set("type", this.route.snapshot.paramMap.get("type"));
        }
        this.equipmentService.getEquipment(requestParams).subscribe(res => this.equipments = res);
      })
  }

}
