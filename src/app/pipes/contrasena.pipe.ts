import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activo:boolean = true): string {
    let password = value;
    if(activo) {
      password = '';
      for (let i = 0; i < value.length; i++) {
          password = password + '*';
      }
    }

    return password;
  }

}
