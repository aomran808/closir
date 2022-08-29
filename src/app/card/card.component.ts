import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../models/Card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() cardData?: Card;
  @Input() centered: boolean = false;
}
