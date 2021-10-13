import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({providedIn: 'root'})
export class ProdService{
    private baseUrl: string = 'https://lv-app-fac1a-default-rtdb.firebaseio.com/';
    private endpoint: string= 'product-info.json';
    constructor(private http:HttpClient){

    }
    getProduct() {
        return this.http.get<[]>(this.baseUrl + this.endpoint);
    }

}