import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/Body/database.service';
import { AccountInfo } from './account-info.model';
import { CreateAccountService } from './create-account-service';

@Component({
  selector: 'app-create-account-layout',
  templateUrl: './create-account-layout.component.html',
  styleUrls:['./create-account-layout.css']
})
export class CreateAccountLayoutComponent implements OnInit {

  constructor(private infoService: CreateAccountService, private dbService:DatabaseService) { }

  ngOnInit(): void {
  }

  onCreateAccount(data:AccountInfo){
    console.log(data);
    console.log("button pressed");
    this.infoService.modifyAccountInfo(data).subscribe(data =>{
      console.log("updated info sent to database");
    });
  }

}
