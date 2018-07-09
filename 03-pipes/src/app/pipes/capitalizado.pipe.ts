import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizado'})
export class CapitalizadoPipe implements PipeTransform {
    transform(value: string, todas:boolean=true): string {

        value = value.toLowerCase();
        let parts = value.split(" ");
        if (todas)
        {
            for (let i in parts)
            {         
                parts[i] = parts[i][0].toUpperCase() + parts[i].substr(1);
            }
        }
        else
        {
            parts[0] = parts[0][0].toUpperCase() + parts[0].substr(1);
        }
        return parts.join(" "); 
    }
}