import { Component, OnInit } from '@angular/core';
import { CardServiceService } from '../cardService/card-service.service';

declare var cardjs: any;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  cards: any;
  friends: any;
  log: any;
  lat: any;
  loc: any;
  theRandomNumber = Math.floor(Math.random() * 6) + 1;
  constructor(public cardService: CardServiceService) {}

  ngOnInit(): void {
    new cardjs();
    this.cardService.getCards().subscribe((response) => {
      this.cards = response;
      this.lat = response.results[0].location.coordinates.latitude;
      this.log = response.results[0].location.coordinates.longitude;
      this.loc="https://maps.google.com/maps?q="+this.lat+","+this.log+"&t=&z=13&ie=UTF8&iwloc=&output=embed"
      console.log("**************************")
      console.log(this.theRandomNumber)
    });
    this.cardService.getFriends(this.theRandomNumber).subscribe((response) => {
      this.friends=response.results;
    });
  }
  openModal() {}
}
