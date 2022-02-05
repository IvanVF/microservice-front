export class BicycleEntity {

  id: number;
  name: string;
  imgAddr: string;
  description: string;
  type: string;

  constructor(id: number, name: string, imgAddr: string, description: string, type: string) {
    this.id = id;
    this.name = name;
    this.imgAddr = imgAddr;
    this.description = description;
    this.type = type;
  }
}
