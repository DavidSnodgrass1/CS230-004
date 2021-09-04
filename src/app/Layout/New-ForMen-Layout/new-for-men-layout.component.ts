import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Body/product.model';

@Component({
  selector: 'app-new-formen-layout',
  templateUrl: './new-for-men-layout.component.html',
  styleUrls: ["./new-for-men-layout.component.css"]
})
export class NewForMenLayoutComponent {
  cards:Product[] = [];
  

}
