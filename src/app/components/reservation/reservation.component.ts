import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../models/reservation';
import { ReservationService } from '../../services/reservation.service';
import { Global } from '../../services/global';
import {ActivatedRoute, Router} from '@angular/router';



@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
  providers: [ ReservationService ]
})
export class ReservationComponent implements OnInit {

  private idSalle: number;
  public title: string;
  public reservation: Reservation;
  public status: string;


  constructor(private route: ActivatedRoute,private router: Router,
              private reservationService: ReservationService
  ) {
this.title = 'Formulaire de reservation';
this.reservation = new Reservation('', '', '', '', '', null, null, null);

   }
  ngOnInit() {
    this.route.params.subscribe(params => {  // recojo los parametros que me llega por la url
      this.idSalle = params.id;
    });
  }

  onSubmit(form) {
    this.reservationService.saveResevation(this.idSalle, this.reservation).subscribe(
      () => {
        this.status = 'succes';
        this.router.navigate(['/salles']);

      }, error => {
        console.log(error as any);

      }

    );




  }

}
