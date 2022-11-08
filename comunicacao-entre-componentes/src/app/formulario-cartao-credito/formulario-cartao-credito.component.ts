import { Component, OnInit } from '@angular/core';
import { CartaoDeCredito } from '../interfaces/CartaoDeCredito';

@Component({
  selector: 'app-formulario-cartao-credito',
  templateUrl: './formulario-cartao-credito.component.html',
  styleUrls: ['./formulario-cartao-credito.component.css']
})
export class FormularioCartaoCreditoComponent implements OnInit {

  
  numeroCartao:number=0
  
  nomeSobrenome:string=""
 
  validade:String=""+"/"+""
  
  codigo:number=0


    formCartaoDeCredito: CartaoDeCredito = {
      ano: '',
      cvc: '',
      mes: '',
      nome: '',
      numero: ''
    }

  constructor() { }

  ngOnInit(): void {
  }

}
