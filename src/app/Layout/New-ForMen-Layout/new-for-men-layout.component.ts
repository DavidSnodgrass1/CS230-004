import { Component, OnInit } from '@angular/core';
import { mock_prod_cards } from 'src/app/Body/Prod-Card-Folder/mock-prod-cards';
import { ProdService } from 'src/app/Body/Prod-Card-Folder/poduct-cards.service';
import { Product } from 'src/app/Body/Prod-Card-Folder/product.model';



@Component({
  selector: 'app-new-formen-layout',
  templateUrl: './new-for-men-layout.component.html',
  styleUrls: ["./new-for-men-layout.component.css"]
})
export class NewForMenLayoutComponent implements OnInit {
  cards:Product[] = [];
 
  constructor (private productService: ProdService){
    
  }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(data => {
      console.log(data);
      for (var item in data){
        console.log(data[item]);
        this.cards.push(new Product(data[item]))
      }
    })
  }


  

}
