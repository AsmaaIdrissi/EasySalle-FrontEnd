import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public searchString:string;

  constructor(
    private _route:Router,
    private _activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
  }
  goSearch(){
   this._route.navigate(['/search:/', this.searchString]);
  }

}
