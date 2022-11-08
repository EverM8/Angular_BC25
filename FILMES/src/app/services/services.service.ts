import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilmesData } from '../interfaces/FilmesData';
import { FilmesNovos } from '../interfaces/FilmesNovos';

@Injectable({
  providedIn: 'root'
})
export class FilmesAPIService {

  private readonly baseURL: string='https://api.themoviedb.org/3/movie/now_playing?api_key=a46686d70176e0abdbf5d1a324c62a94&language=pt-BR'
  constructor(
    private http: HttpClient
  ) { }

  carregar(){
    return this.http.get<FilmesNovos>(this.baseURL)
  }

   pesquisarFilme(title:string){
  //   //const busca=title.toLocaleLowerCase()
  //   //busca.replace(/\n/g,"+")
     return this.http.get<FilmesData>(`${this.baseURL}${title}`)
  }
}
