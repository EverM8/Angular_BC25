import { NgModule } from "@angular/core";

// iniciar o roteamento
// importar o módulo de roteamento
import { RouterModule, Routes } from "@angular/router"; 
import { ListarProdutosComponent } from "./pages/listar-produtos/listar-produtos.component";

// rota -> componente
/**
 * rotas é responsável por armazenar as rotas que 
 * existem dentro do site
 */
const rotas: Routes = [ //Cada item do array de rotas é uma nova rota que foi declarada
    {
        // http://localhost:4200
        path: '', //caminho para acessar a rota (string vazia significa a rota principal)
        redirectTo: 'produtos', // redireciona o usuário para outra página no momento que ele entrar nesta rota
        pathMatch: 'full'
    }, //cada objeto é uma rota
    {
        // http://localhost:4200/produtos
        path: 'produtos',
        component: ListarProdutosComponent
    }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(rotas) //módulo que inicia o roteamento / forRoot() passa parâmentros para o RouterModule    
    ], 
    providers: [],
    exports: [
        RouterModule // exportando o módulo após as rotas terem sido carregadas dentro dele
    ]
})
export class AppRoutingModule {}