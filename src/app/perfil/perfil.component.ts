import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
})
export class PerfilComponent implements OnInit {

  email1: boolean = true;
  email2: boolean = false;
  nome: string = "nome completo";
  matricula: string = "123456";

  ngOnInit() {
  }

  changeEmail1() {
    this.email1 = !this.email1;
  }

  changeEmail2() {
    this.email2 = !this.email2;
  }

  sairLista() {
    $.notify({
      title: 'Lista Tecmicro',
      message: 'Seu nome foi retirado da lista!'
    }, {
      type: 'danger',
      timer: 3000,
      template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="material-icons">close</i></button>' +
        '<i class="material-icons" data-notify="icon">alarm</i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
      '</div>'
    });
  }

  salvarPerfil() {
    $.notify({
      title: 'Meu Perfil',
      message: 'Dados Salvos com Sucesso!'
    }, {
      type: 'success',
      timer: 3000,
      template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="material-icons">close</i></button>' +
        '<i class="material-icons" data-notify="icon">check</i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
      '</div>'
    });
  }
}
