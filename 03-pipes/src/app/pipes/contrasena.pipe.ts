import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: any, activar:boolean = true): any {
    let retVal = "";
    if (activar)
    {
      for (let i in value)
      {
        retVal += "*";
      }
    }
    else
    {
      retVal = value;
    }

    return retVal;
  }

}
