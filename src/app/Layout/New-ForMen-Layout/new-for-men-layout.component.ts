import { Component, OnInit } from '@angular/core';
import { mock_prod_cards } from 'src/app/Body/Prod-Card-Folder/mock-prod-cards';
import { Product } from 'src/app/Body/Prod-Card-Folder/product.model';

@Component({
  selector: 'app-new-formen-layout',
  templateUrl: './new-for-men-layout.component.html',
  styleUrls: ["./new-for-men-layout.component.css"]
})
export class NewForMenLayoutComponent {
  cards:Product[] = [];

  constructor(){
    for (var product of mock_prod_cards){
      this.cards.push(new Product(product));
    }
  }
  

}
