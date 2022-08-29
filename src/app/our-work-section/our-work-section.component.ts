import { Component, Input, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { Card } from '../models/Card.model';

@Component({
  selector: 'app-our-work-section',
  templateUrl: './our-work-section.component.html',
  styleUrls: ['./our-work-section.component.css'],
})
export class OurWorkSectionComponent implements OnInit {
  constructor(private cardService: CardService) {}

  ourWorkData: Card[] = [];

  getOurWorkData(): void {
    this.ourWorkData = this.cardService.getOurWorkData();
  }

  ngOnInit(): void {
    this.getOurWorkData();
  }
}
