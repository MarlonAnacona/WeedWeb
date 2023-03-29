//Clase en la cual se guarda el guardian en caso de estar logueado o no a la aplicación
export class Authservice {
  loogedIn = localStorage.getItem('token') || false;

  //En caso de estar logeado
  login() {
    this.loogedIn = true;
  }

  //En caso de salirse de la cuenta
  logout() {
    this.loogedIn = false;
  }

  //Autentica el logeo
  IsAuthenticated() {
    return this.loogedIn;
  }
  //Autentica el logeo
  IsAuthenticatedLoggin() {
    return this.IsAuthenticated();
  }
}
