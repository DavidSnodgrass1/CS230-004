import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AccountInfo } from "./account-info.model";


@Injectable({providedIn: 'root'})
export class CreateAccountService{
    private baseUrl: string = 'https://lv-app-fac1a-default-rtdb.firebaseio.com/';
    private endpoint: string= 'account-info.json';
    constructor(private http:HttpClient){

    }
    getAccountInfo() {
        return this.http.get<[]>(this.baseUrl + this.endpoint);
    }

    modifyAccountInfo(data:AccountInfo){
        return this.http.put(this.baseUrl + this.endpoint, data);
    }

}