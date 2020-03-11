import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from  '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Contact } from '../models/contact';
import { Global } from './global';



@Injectable()
export class ContactService{

    public url:string='lifasan@hotmail.com'

    constructor(
        private _http:HttpClient
    ){

        this.url=Global.url;

    }

    saveContact(contact:Contact):Observable<any>{
       let params=JSON.stringify(contact);
       let headers=new HttpHeaders().set('Content-Type', 'application/json');

       return this._http.post(this.url+'save-contact', params, {headers:headers});


    }



}
