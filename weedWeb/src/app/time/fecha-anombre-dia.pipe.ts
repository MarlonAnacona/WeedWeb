import { Pipe, PipeTransform } from '@angular/core';
import { ClimaService } from './weather.service'

@Pipe({
  name: 'fechaANombreDia'
})
export class FechaANombreDiaPipe implements PipeTransform {
  constructor(private climaService: ClimaService) { }

  transform(fechaComoCadena: string) {
    fechaComoCadena = this.climaService.parsearFecha(fechaComoCadena) + " 00:00:00";
    const dias = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo',
    ];
    const numeroDia = new Date(fechaComoCadena).getDay();
    const nombreDia = dias[numeroDia];
    return nombreDia;
  }

}