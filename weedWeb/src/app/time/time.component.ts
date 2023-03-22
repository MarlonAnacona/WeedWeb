import { Component, OnInit } from '@angular/core';
import { ClimaService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
})
export class TimeComponent implements OnInit {
  cargando = false;
  city = '';
  region_name = '';
  country_name = '';
  hora = '';
  detallesHoy = {};
  detallesProximos = [];

  constructor(private weatherService: ClimaService) {}

  comenzarReloj() {
    const _this = this;
    setInterval(() => {
      let hora = '';
      let fecha = new Date();
      let horas = fecha.getHours();
      let minutos = fecha.getMinutes();
      let segundos = fecha.getSeconds();
      let horasArregladas = horas.toString();
      if (horas < 10) {
        horasArregladas = '0' + horasArregladas;
      }
      let minutosArreglados = minutos.toString();
      if (minutos < 10) {
        minutosArreglados = '0' + minutosArreglados;
      }
      let segundosArreglados = segundos.toString();
      if (segundos < 10) {
        segundosArreglados = '0' + segundosArreglados;
      }
      _this.hora = `${horasArregladas}:${minutosArreglados}:${segundosArreglados}`;
    }, 500);
  }

  async ngOnInit() {
    // Verificar si el navegador soporta geolocalización
    if (navigator.geolocation) {
      this.cargando = true;

      navigator.geolocation.getCurrentPosition((position) => {
        // Obtener las coordenadas de latitud y longitud
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        const clima = new ClimaService();
        const datosDeClima: any = clima
          .obtenerDatosDeClima(lat, long)
          .then((datos) => {
            console.log(datos);

            this.detallesHoy = datos.dataseries.slice(0, 1)[0];
            this.detallesProximos = datos.dataseries.slice(1, 5);
          });

        // Ocultamos el indicador de carga y comenzamos el reloj
        this.cargando = false;
        this.comenzarReloj();
        // Hacer una llamada a una API de geocodificación para obtener la dirección
        fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${long}&format=json`
        )
          .then((response) => response.json())
          .then((data) => {
            // Obtener la dirección a partir de la respuesta de la API
          });
      });
      // Hacer que se muestre el indicador de carga
      // // Obtener los datos de ubicación
      // const datosDeUbicacion =
      //   await this.weatherService.obtenerDatosUbicacion();
      // console.log(datosDeUbicacion);
      // this.city = datosDeUbicacion.city;
      // this.region_name = datosDeUbicacion.region_name;
      // this.country_name = datosDeUbicacion.country_name;
      // const { latitude, longitude } = datosDeUbicacion;
      // // Obtener, ahora, los datos del clima

      // const datosDeClima = await this.weatherService.obtenerDatosDeClima(
      //   latitude,
      //   longitude
      // );
      // Cortamos el arreglo para mostrar la de hoy, y también las siguientes
    } else {
      // El navegador no soporta geolocalización
      console.log('Tu navegador no soporta geolocalización.');
    }
  }
}
