import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Salle } from '../../models/salle';
import { SalleService } from '../../services/salle.service';
import { SallesComponent } from '../salles/salles.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers:[SalleService]
})
export class SearchComponent implements OnInit {

  public salle:Salle;
  public title:string;
  public salles:Salle[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _salleService: SalleService
  ) {
    this.title="Salles trouvés pour votre recherche";
  }

  ngOnInit() {
    this._route.params.subscribe(params=>{

      var search=params['search'];
      alert(search);
      this._salleService.search(search).subscribe(
        response=>{
          if(response.salles){
            this.salles=response.salles;
          }else{
            this.salles=[];
          }

      },error=>{ console.log(<any>error);
        this.salles=[];


      })


    });
  }



}
