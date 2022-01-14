import { Component, OnInit } from '@angular/core';
import {AccessoriesService} from "../../services/accessories.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css', '../../app.component.css']
})
export class AccessoriesComponent implements OnInit {
  accessories: any;

  constructor(
    private accessoriesService: AccessoriesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        let requestParams = new Map();
        if (this.route.snapshot.paramMap.get("type") != null) {
          requestParams.set("type", this.route.snapshot.paramMap.get("type"));
        }
        this.accessoriesService.getAccessories(requestParams).subscribe(res => this.accessories = res);
      }
    )
  }

}
