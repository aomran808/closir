import { Injectable } from '@angular/core';
import { Card } from './../models/Card.model';
import { chooseUsData, ourWorkData } from '../data/dummy-data';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor() {}

  public getChooseUsData(): Card[] {
    return chooseUsData;
  }

  public getOurWorkData(): Card[] {
    return ourWorkData;
  }
}
