import { Component } from '@angular/core';
import { CartaoDeCredito } from './interfaces/CartaoDeCredito';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comunicacao-entre-componentes';

  mostrarMsg(){
    alert('O upload foi concluído com sucesso')
  }


  formCartaoDeCredito: CartaoDeCredito = {
    ano: '',
    cvc: '',
    mes: '',
    nome: '',
    numero: ''
  }
}
