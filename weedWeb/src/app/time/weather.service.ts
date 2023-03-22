import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  // constructor(private http: HttpClient) {}
  private RUTA_API_UBICACION = 'https://freegeoip.app/json/';

  async obtenerDatosUbicacion() {
    const response = await fetch(this.RUTA_API_UBICACION);
    return await response.json();
  }

  async obtenerDatosDeClima(longitude: any, latitude: any) {
    const response = await fetch(
      `http://www.7timer.info/bin/civillight.php?lon=${longitude}&lat=${latitude}&ac=0&unit=metric&output=json`
    );
    return await response.json();
  }

  parsearFecha(value: string) {
    value = '' + value;
    if (!value) {
      return '';
    }
    let anio = value.substring(0, 4);
    let mes = value.substring(4, 6);
    let dia = value.substring(6, 8);
    return anio + '-' + mes + '-' + dia;
  }

  // getUbicacion(latitud: number, longitud: number): Observable<any> {
  //   return this.http.get(
  //     `https://nominatim.openstreetmap.org/reverse?lat=${latitud}&lon=${longitud}&format=json`
  //   );
  // }
}
