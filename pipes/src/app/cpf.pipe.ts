import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: string): string {
      //123.456.789-10
      const valorFormatado=value.replace(/([0-9]{3}) ([0-9]{3}) ([0-9]{3}) ([0-9]{2})/, '$1.$2.$3-$4');
    
      return valorFormatado;
    
  }

}
