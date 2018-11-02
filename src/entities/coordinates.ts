import { ObjectID } from "mongodb";
import { Entity } from "./entity.abstract";

export class Coordinates extends Entity {
  public lat: number;
  public lng: number;

  constructor(coordinates: Coordinates) {
    super();

    this.lat = coordinates.lat;
    this.lng = coordinates.lng;
  }
}
