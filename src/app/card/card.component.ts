import { Component, OnInit } from '@angular/core';
import { CardServiceService } from '../cardService/card-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  cards: any;
  log: any;
  lat: any;
  loc: any;
  constructor(public cardService: CardServiceService) {}

  ngOnInit(): void {
    this.cardService.getCards().subscribe((response) => {
      this.cards = response;
      this.lat = response.results[0].location.coordinates.latitude;
      this.log = response.results[0].location.coordinates.longitude;
    });
  }
  openModal() {}
}
