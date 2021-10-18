import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/Body/database.service';
import { AccountInfo } from '../Create-Account-Layout-Folder/account-info.model';
import { CreateAccountService } from '../Create-Account-Layout-Folder/create-account-service';

@Component({
  selector: 'app-account-layout',
  templateUrl: './account-info-layout.component.html',
  styleUrls: ['./account-info-layout.css']
})
export class AccountInfoLayoutComponent implements OnInit {
  names: String[] = [];
  values: String[] = [];
  constructor(private infoService: CreateAccountService, private dbService: DatabaseService) {
    dbService.showData();
  }


  ngOnInit(): void {
    this.infoService.getAccountInfo().subscribe(data => {
      for (var item in data) {
        this.values.push(data[item]);
        this.names.push(item);
      }
    })
    console.log(this.names);
    console.log(this.values);
  }

  onEditAccount(data: AccountInfo) {
    console.log(data);
    console.log("button pressed");
    this.infoService.modifyAccountInfo(data).subscribe(data => {
      console.log("updated info sent to database");
    });
  }

  reload() {
    window.location.href = window.location.href;
  }


}
