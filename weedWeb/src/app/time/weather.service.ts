import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  private RUTA_API_UBICACION = "https://freegeoip.app/json/";

  constructor() { }

  async obtenerDatosUbicacion() {
    const response = await fetch(this.RUTA_API_UBICACION);
    return await response.json();
  }

  async obtenerDatosDeClima(longitude: string, latitude: string) {
    const response = await fetch(`http://www.7timer.info/bin/civillight.php?lon=${longitude}&lat=${latitude}&ac=0&unit=metric&output=json`);
    return await response.json();
  }

  parsearFecha(value: string) {
    value = "" + value;
    if (!value) {
      return "";
    }
    let anio = value.substring(0, 4);
    let mes = value.substring(4, 6);
    let dia = value.substring(6, 8);
    return anio + "-" + mes + "-" + dia;
  }
}