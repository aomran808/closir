import { Component, Input, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { Card } from '../models/Card.model';

@Component({
  selector: 'app-choose-us-section',
  templateUrl: './choose-us-section.component.html',
  styleUrls: ['./choose-us-section.component.css'],
})
export class CardContainerComponent implements OnInit {
  constructor(private cardService: CardService) {}

  chooseUsData: Card[] = [];
  getChooseUsData(): void {
    this.chooseUsData = this.cardService.getChooseUsData();
    console.log(this.chooseUsData);
  }

  ngOnInit(): void {
    this.getChooseUsData();
  }
}
