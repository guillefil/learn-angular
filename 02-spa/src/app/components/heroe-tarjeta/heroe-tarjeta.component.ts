import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: []
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() index:number;

  @Output() hereoSeleccionado:EventEmitter<number>;

  constructor(private _router:Router) { 

    this.hereoSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe(){
    this._router.navigate(['/heroe', this.index]);
    /* this.hereoSeleccionado.emit(this.index); */
  }

}
