import { Component, OnInit } from '@angular/core';
import { Beer } from './beer';
import { BeerDataService } from '../beer-data.service';

@Component({
  selector: 'beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
beers : Beer[];

  constructor(private beerDataService : BeerDataService) { }

  ngOnInit() {
    this.beerDataService.getBeers().subscribe(beers => this.beers=beers);
  }

  upQuantity(beer){
    if(beer.quantity < beer.stock)
      beer.quantity++;
  }
  downQuantity(beer){
    if(beer.quantity>0)
      beer.quantity--;
  }
  checkQuantity(beer){
    if(beer.quantity > beer.stock){
      beer.quantity = beer.stock;
    }

    if(beer.quantity  < 0){
      beer.quantity = 0;
    }
  }

}
