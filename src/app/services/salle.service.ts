import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Salle } from '../models/salle';
import { Global } from './global';


@Injectable()
export class SalleService {
    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;

    }

    testService() {
        return 'Probando el servicio de angular';
    }
    saveSalle(salle: Salle): Observable<any> {
        const params = JSON.stringify(salle);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'save-salle', params, {headers});
    }

    getSalles(): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'salle', {headers});
    }
    getSalle(id): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'salle/' + id, {headers});
    }

    deleteSalle(id): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url + 'salle/' + id, {headers});

    }

    updateSalle(salle): Observable<any> {
        const params = JSON.stringify(salle);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url + 'salle/' + salle._id, params, {headers});
    }
    search(searchString): Observable<any> {
        return this._http.get(this.url + 'search/' + searchString);

    }

}
