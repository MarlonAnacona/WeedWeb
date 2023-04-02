import { Pipe, PipeTransform } from '@angular/core';
import { ClimaService } from './weather.service'
@Pipe({
  name: 'formatearFecha'
})
export class FormatearFechaPipe implements PipeTransform {

  constructor(private climaService: ClimaService) { }

  transform(value: string) {
    return this.climaService.parsearFecha(value);
  }

}