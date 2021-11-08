import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'lv-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent{
  public onSubmit(data : NgForm){
    console.log("button clicked")
    console.log(data.value)
  }

}
