import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FilmesData } from './interfaces/FilmesData';
import { FilmesAPIService } from './services/services.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FilmesNovos } from './interfaces/FilmesNovos';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filmesForm: FormGroup=this.fb.group({
   title:['',[Validators.required]]
  })

  fTitle!:FilmesData
  filmesNovos!:FilmesNovos 
  
  constructor(
    private fb: FormBuilder,
    private filmesService: FilmesAPIService,
    private snackBar: MatSnackBar // Componente do material para mostrar mensagens
  ) {}
  /**
   * Método HTTP
   * Leitura de dados -> GET
   * Criação de dados -> POST
   * Atualização de dados -> PUT
   * Deleção de dados -> DELETE
   */

    ngOnInit(){
      this.filmesService.carregar().subscribe(
        (filme)=>{this.filmesNovos=filme}
      )
    }

  pesquisar(){
    const title=this.filmesForm.get('title')?.value// recuperando o nome de usuário que deve ser procurado
    /**
     * -> ORDEM DAS FUNÇÕES DENTRO DO SUBSCRIBE<-
     * ->1ª: SUCESSO
     * ->2ª: ERRO
     * ->3ª: COMPLETO
    */
   this.filmesService.pesquisarFilme(title).subscribe(
    (title)=>{
      this.fTitle=title
    },
   (erro)=>{
    if(erro instanceof HttpErrorResponse){
      if(erro.status==404){
        this.snackBar.open(`Desculpe, o filme ${title} não foi encontrado`)
      }
    }
   }
   )
  }
}
