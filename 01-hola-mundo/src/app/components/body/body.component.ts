import { Component } from '@angular/core'

@Component({
    selector: 'app-body', //define qué etiqueta de HTML lo carga
    templateUrl: './body.component.html' //defino qué HTML se utiliza para renderizar la etiqueta
})

export class BodyComponent{
    // esto mapea HTML a componentes angular

    mostrar = true;

    frase:any = {
        mensaje: "Esta es la primera app en angular",
        autor: "Guillermo Filia"
    }

    personajes:string[] = ["Spiderman", "Venom", "Octopus"];

}