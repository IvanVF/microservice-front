import { Component, OnInit } from '@angular/core';
import {SpareService} from "../../services/spare.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-spares',
  templateUrl: './spares.component.html',
  styleUrls: ['./spares.component.css', '../../app.component.css']
})
export class SparesComponent implements OnInit {
  spares: any;

  constructor(
    private spareService: SpareService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        let requestParams = new Map();
        if (this.route.snapshot.paramMap.get("type") != null) {
          requestParams.set("type", this.route.snapshot.paramMap.get("type"));
        }
        this.spareService.getSpares(requestParams).subscribe(res => this.spares = res);
      })
  }

}
