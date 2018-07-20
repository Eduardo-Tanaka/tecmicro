import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enquete',
  templateUrl: './enquete.component.html',
  styleUrls: ['./enquete.component.css']
})
export class EnqueteComponent implements OnInit {

  enquetes = [
    {
      numero: 4,
      content: 'Queremos conhecer mais sobre o seu nível de conhecimento. Nesta enquete, avalie seu domínio de ASP (VB-Script), ainda que na atualidade não esteja mais usando esta linguagem:',
      data: '24/7/2018',
      autor: '058825',
      selectedOption: null,
      options: [
        {
          id: 1,
          text: 'Não tenho conhecimento.'
        },
        {
          id: 2,
          text: 'Conhecimento básico.'
        },
        {
          id: 3,
          text: 'Conhecimento médio/intermediário.'
        },
        {
          id: 4,
          text: 'Conhecimento avançado.'
        },
        {
          id: 5,
          text: 'Expert (consigo desenvolver qualquer coisa).'
        }
      ]
    },
    {
      numero: 5,
      content: 'Queremos conhecer mais sobre o seu nível de conhecimento. Nesta enquete, avalie seu domínio de ASP (VB-Script), ainda que na atualidade não esteja mais usando esta linguagem:',
      data: '27/7/2018',
      autor: '058825',
      selectedOption: 30,
      options: [
        {
          id: 10,
          text: 'Não tenho conhecimento.'
        },
        {
          id: 20,
          text: 'Conhecimento básico.'
        },
        {
          id: 30,
          text: 'Conhecimento médio/intermediário.'
        },
        {
          id: 40,
          text: 'Conhecimento avançado.'
        },
        {
          id: 50,
          text: 'Expert (consigo desenvolver qualquer coisa).'
        }
      ]
    }
  ]

  enquetesAtivas: number = 0;

  ngOnInit() {
    this.enquetesAtivas = this.enquetes.length;
  }
}
