import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/interfaces/Produto';
import { ProdutosApiService } from 'src/app/services/produtos-api.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  p: Produto[]=[]

  constructor(
    private produtoService: ProdutosApiService // 7ºpasso para requisição http
  ) { }

  //8º passo
  ngOnInit(): void { // é chamado quando o componente foi colocado(renderizado) na tela
    this.produtoService.listarProdutos().subscribe(
      (prods)=>{
         this.p=prods
        
      }
    )
  }

}
