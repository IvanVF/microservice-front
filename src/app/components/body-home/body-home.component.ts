import {Component, OnInit} from "@angular/core";
import {BicyclesService} from "../../services/bicycles/bicycles.service";

@Component({
  selector: 'app-body-home',
  templateUrl: 'body-home.component.html',
  styleUrls: ['body-home.component.css']
})
export class BodyHomeComponent implements OnInit {
  items: any;
  requestParams= new Map();

  constructor(
    private bicycleService: BicyclesService,
  ) {
  }

  ngOnInit() {

    this.bicycleService.getBicycles(this.requestParams)
      .pipe()
      .subscribe(res => {
        this.items = res;
        let abc: string = "asd";
        console.log(abc);
        console.log(this.items);
      });
  }
}
