import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosApiService {
  //readonly torna o baseUrl constante
  private readonly baseUrl: string ='http://localhost:3000/produtos' //5º passo para requisição http

  constructor(
    private http: HttpClient // 4º passo importar o HttpClient
  ) { }

  //Listar informações produtos 6º passo para requisição http => 7º passo em listar-produtos.components
  listarProdutos() {
    return this.http.get<Array<Produto>>(this.baseUrl)
  }
}
