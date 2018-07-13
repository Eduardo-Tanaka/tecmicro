import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {
  title: string;
  descr: string;
  respostas: string[];

  constructor(private router:Router) {}


  ngOnInit() {
    this.title = "Update SQLServer com Javascript PHP";
    this.descr = `Caros Integrantes da Lista,

Estou construindo uma página em PHP, JavaScript e preciso fazer um update na tabela do SQLServer (SSMS), peguei alguns exemplos
 na internet para conseguir construir, mas o exemplo era para fazer uma atualização na própria pagina html através do código do
  JavaScript:

if ( valid ) {
             $( "#users tbody" ).append( "<tr>" +
               "<td>" + equipe.val() + "</td>" +
               "<td>" + gerente.val() + "</td>" +
               "<td>" + password.val() + "</td>" +
             "</tr>" );
            dialog.dialog( "close" );
           }
          return valid;

É possível usar código <?php sqlsrv_query()?> na parte do script?`;
    this.respostas = [`Caro colega.

Seria ideal se voce desse mais informações do que precisa fazer. Voce esta listando registros do banco e precisa guardar as 
alterações realizadas no banco ?

Se for isso, existe sim a possibilidade. Voce pode utilizar Ajax para isso. Tanto para listar, quanto para realizar o update. Use o 
ajax para capturar os 
valores 
dos inputs (use um id ou classe) e atribuir para um array, passe isso para o ajax, que ira jogar isso para a pagina
 em php que ira tratar os dados e realizar o 
insert no banco.

Tenha em mente que JavaScript roda no cliente (pelo menos nesse caso ai), e PHP no servidor.

Não utilize funcoes de conexão do php dentro de codigos script. Tente isolar as responsabilidades, para nao dar confusão na 
manutenção.

Espero que tenha conseguido ajudar um pouco.`,
`Caro colega.

Seria ideal se voce desse mais informações do que precisa fazer. Voce esta listando registros do banco e precisa guardar as 
alterações realizadas no banco ?

Se for isso, existe sim a possibilidade. Voce pode utilizar Ajax para isso. Tanto para listar, quanto para realizar o update. Use o 
ajax para capturar os 
valores 
dos inputs (use um id ou classe) e atribuir para um array, passe isso para o ajax, que ira jogar isso para a pagina
 em php que ira tratar os dados e realizar o 
insert no banco.

Tenha em mente que JavaScript roda no cliente (pelo menos nesse caso ai), e PHP no servidor.

Não utilize funcoes de conexão do php dentro de codigos script. Tente isolar as responsabilidades, para nao dar confusão na 
manutenção.

Espero que tenha conseguido ajudar um pouco.`]
  }

}
