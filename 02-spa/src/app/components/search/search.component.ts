import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { HeroesService } from '../../services/heroes.services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  results:any = [];
  termino:string = '';

  constructor(private _router:Router, private _activatedRoute:ActivatedRoute, private _heroeService:HeroesService ) {

   }

  ngOnInit() {

    this._activatedRoute.params.subscribe(params => {  
      this.termino = params['k'];
      this.results = this._heroeService.buscarHeroes(this.termino);
    });
    
    

  }

  verHeroe(idx:number){
    this._router.navigate(['/heroe', idx]);
  }

  

}
