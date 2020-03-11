import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Reservation } from '../models/reservation';
import { Global } from './global';


@Injectable()
export class ReservationService {
    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;

    }


    saveResevation(idSalle: number, reservation: Reservation): Observable<any> {
        const params = JSON.stringify({...reservation, idSalle
        }
        );
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url  + 'reservation/creer', params, {headers});
    }

    getReservations(): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'reservations', {headers});
    }
    getReservation(id): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'reservation/' + id, {headers});
    }

    deleteReservation(id): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url + 'reservation/' + id, {headers});

    }

    updateReservation(reservation): Observable<any> {
        const params = JSON.stringify(reservation);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url + 'reservation/' + reservation._id, params, {headers});
    }

}

