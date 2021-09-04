import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-prod-card',
  templateUrl: './product-card.component.html',
  styleUrls: ["./product-card.component.css"]
})
export class ProductCardComponent  {
  @Input() name!:string;
  @Input() price!:string;
  @Input() imagePath!:string;


}
