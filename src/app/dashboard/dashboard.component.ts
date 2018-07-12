import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

export interface Element {
  data: string;
  post: string;
  autoria: string;
  tipo: string;
  assunto: string;
  descr: string,
  resp: string;
}

const ELEMENT_DATA: Element[] = [
  { data: '10/7/2018 09:27:54', post: '23', autoria: 'Teste', tipo: 'Pergunta / Dúvida / Pedido de Ajuda', assunto: 'Update SQLServer com Javascript PHP', descr: 'Caros Integrantes da Lista, Estou construindo uma página em PHP, JavaScript e preciso fazer um update na tabela do SQLServer (SSMS), peguei alguns exemplos na internet para conseguir constr... ', resp: '8' },
  { data: '10/7/2018 09:27:54', post: '22', autoria: 'Teste 2', tipo: 'Divulgação de Comunidade', assunto: 'Comunidade', descr: 'descrição', resp: '4' },
  { data: '10/7/2018 09:27:54', post: '21', autoria: 'Teste', tipo: 'Compartilhamento de uma Solução ou Código Útil', assunto: 'Código', descr: 'descrição', resp: '18' },
  { data: '10/7/2018 09:27:54', post: '20', autoria: 'Teste', tipo: 'Pergunta / Dúvida / Pedido de Ajuda', assunto: 'Dúvida', descr: 'descrição', resp: '8' },
  { data: '10/7/2018 09:27:54', post: '19', autoria: 'Teste', tipo: 'Divulgação de Evento', assunto: 'Update SQLServer com Javascript PHP', descr: 'descrição', resp: '8' },
  { data: '10/7/2018 09:27:54', post: '18', autoria: 'Teste', tipo: 'Divulgação de Evento', assunto: 'Update SQLServer com Javascript PHP', descr: 'descrição', resp: '8' },
  { data: '10/7/2018 09:27:54', post: '17', autoria: 'Teste', tipo: 'Pergunta / Dúvida / Pedido de Ajuda', assunto: 'Update SQLServer com Javascript PHP', descr: 'descrição', resp: '8' }
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  displayedColumns = ['data', 'post', 'autoria', 'tipo', 'assunto', 'resp'];
  filtroTipos = [
    'Pergunta / Dúvida / Pedido de Ajuda',
    'Compartilhamento de uma Solução ou Código Útil',
    'Divulgação de Evento',
    'PSI',
    'Divulgação de Comunidade',
    'Divulgação de Ferramenta Útil',
    'Off-Topic / Humor / Descontração',
    'Sugestão / Proposta / Idéia',
    'Análise do Produto / Opinião / Review',
    'Classificados'
  ];
  dataSource: MatTableDataSource<Element>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // constructor(private navbarTitleService: NavbarTitleService) { }
  ngOnInit() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator, sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  filtrarTipo(value: string) {
    this.dataSource.filter = value;
  }
}
