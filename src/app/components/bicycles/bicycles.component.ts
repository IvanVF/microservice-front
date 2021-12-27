import { Component, OnInit } from '@angular/core';
import {ImageEntity} from "../../services/images/image-entity";
import {ImagesService} from "../../services/images/images.service";

@Component({
  selector: 'app-bicycles',
  templateUrl: './bicycles.component.html',
  styleUrls: ['./bicycles.component.css']
})
export class BicyclesComponent implements OnInit {
  images: any;

  constructor(
    private imageService: ImagesService
  ) { }

  ngOnInit() {
    let requestParams = new Map()
    requestParams.set("type", "WOMAN");
    this.imageService.getImages(requestParams).subscribe(res => this.images = res);
  }

}
