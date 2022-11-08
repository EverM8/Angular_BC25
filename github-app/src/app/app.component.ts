import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GithubApiService } from './services/services.service';
import { GithubUser } from './interfaces/GithubUser';
import { GithubRepo } from './interfaces/GithubRepo';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  githubForm: FormGroup = this.fb.group({
    username: ['', [ Validators.required ]]
  })

  gUser!: GithubUser // undefined
  gRepos:GithubRepo[]=[]

  constructor(
    private fb: FormBuilder,
    private githubService: GithubApiService,
    private snackBar: MatSnackBar // Componente do material para mostrar mensagens
  ) {}

  procurar(){
    const username= this.githubForm.get('username')?.value // recuperando o nome de usuário que deve ser procurado
    /**
     * -> ORDEM DAS FUNÇÕES DENTRO DO SUBSCRIBE<-
     * ->1ª: SUCESSO
     * ->2ª: ERRO
     * ->3ª: COMPLETO
    */

    this.githubService.procurarUsuario(username).subscribe(
      (user)=>{
        this.gUser=user
      },
      (erro)=>{
        // HttpErrorResponse
        // preciso saber se i neu erro vem dessa classe
        if(erro instanceof HttpErrorResponse){
          if(erro.status == 404){
            this.snackBar.open(`Usuário ${username} não encontrado`, 'Ok') // abrindo o snackBar na tela
          }
        }
      }
    )
    this.githubService.procurarRepos(username).subscribe(
      (repos)=>{
        this.gRepos=repos
      }
    )
  }
}
