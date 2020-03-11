import {Component, OnInit} from '@angular/core';
import {Salle} from '../../models/salle';
import {SalleService} from '../../services/salle.service';
import {Global} from '../../services/global';
import {Router, ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [SalleService]
})
export class DetailComponent implements OnInit {
  public url: string;
  public salle: Salle;
  public confirm: boolean;

  constructor(
    private salleService: SalleService,
      private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    this.url = Global.url;
    this.confirm = false;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {  //recojo los parametros que me llega por la url
      const id = params.id;
      this.getSalle(id);
    });
  }

  //peticion ajax al backend
  getSalle(id) {
    this.salleService.getSalle(id).subscribe(
      response => {
        this.salle = response;
      },
      error => {
        console.log(<any> error);
      }
    );
  }

  setConfirm(confirm) {
    this.confirm = confirm;
  }

  deleteSalle(id) {
    this.salleService.deleteSalle(id).subscribe(
      response => {
        if (response.salle) {
          this.router.navigate(['/salles']);
        }
      },
      error => {
        console.log(<any> error);
      });

  }
  transform(salle: Salle) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(salle.picture);
  }
  redirigerReservation(salleId: number) {
    this.router.navigate(['/reservation/' + salleId]);

  }
}


