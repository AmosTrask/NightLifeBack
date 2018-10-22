import { Entity } from "./entity.abstract";

export class PrescriptionEntry extends Entity {
  public idMedication: string;
  public dose: string;

  constructor(prescriptionEntry: PrescriptionEntry) {
    super();

    this.idMedication = prescriptionEntry.idMedication;
    this.dose = prescriptionEntry.dose;
  }
}
