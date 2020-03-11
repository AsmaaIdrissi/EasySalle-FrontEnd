import {Component, OnInit} from '@angular/core';
import {Salle} from '../../models/salle';
import {SalleService} from '../../services/salle.service';
import {Global} from '../../services/global';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.scss'],
  providers: [SalleService]
})
export class SallesComponent implements OnInit {

  public salles: Salle[];
  public url: string;

  constructor(
    private salleService: SalleService, private sanitizer: DomSanitizer
  ) {
    this.url = Global.url;
  }

  ngOnInit() {
    this.getSalles();
  }
  transform(salle: Salle) {
   return this.sanitizer.bypassSecurityTrustResourceUrl(salle.picture);
  }
  getSalles() {
    this.salleService.getSalles().subscribe(response => {
        if (response) {
          this.salles = response;
        }
      },
      error => {
        console.log(error as any);
      }
    );

  }

}
