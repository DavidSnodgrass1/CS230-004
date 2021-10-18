import { Injectable } from "@angular/core";
import { AngularFireDatabase} from '@angular/fire/compat/database';
import { Observable } from "rxjs";
import { AccountInfo } from "../Layout/Create-Account-Layout-Folder/account-info.model";

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    names: Observable<AccountInfo []>;
    constructor(private db:AngularFireDatabase){
        console.log("Setting up Firebase communication");
        this.names = this.db.list<AccountInfo>('account-info').valueChanges();
    }

    public showData(){
        this.names.subscribe((data: AccountInfo [] ) => {
            console.log("data received");
            console.log(data);
        })
    }
}