import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

// para usar o jQuery
declare const $: any;

@Component({
  selector: 'app-novo-post',
  templateUrl: './novopost.component.html'
})
export class NovoPostComponent implements OnInit {

  postForm: FormGroup;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Enter, comma
  separatorKeysCodes = [ ENTER, COMMA ];

  tags = [];

  ckeConfig: any;
  content: string;

  categories: any[] = [
    { value: 1, name: 'Pergunta / Dúvida / Pedido de Ajuda' },
    { value: 2, name: 'Compartilhamento de uma Solução ou Código Útil' },
    { value: 3, name: 'Divulgação de Evento' },
    { value: 4, name: 'PSI' },
    { value: 5, name: 'Divulgação de Comunidade' },
    { value: 6, name: 'Divulgação de Ferramenta Útil' },
    { value: 7, name: 'Off-Topic / Humor / Descontração' },
    { value: 8, name: 'Sugestão / Proposta / Idéia' },
    { value: 9, name: 'Análise do Produto / Opinião / Review' },
    { value: 10, name: 'Classificados' }
  ];

  @ViewChild("myckeditor") ckeditor: any;

  constructor(private formBuilder: FormBuilder, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.ckeConfig = {
      allowedContent: false,
      removePlugins: 'link,save,selectall,showblocks,print,preview,newpage,pagebreak,language,liststyle,iframe,forms,flash,div,templates,bidi,dialogadvtab,colordialog,table,tableselection,tabletools,uploadimage,maximize,image,horizontalrule,specialchar,filebrowser,elementspath,format,wsc,scayt,sourcearea,about',
      forcePasteAsPlainText: true
    };

    this.postForm = this.formBuilder.group({
      categoria: ['', [Validators.required]],
      assunto: ['', [Validators.required]],
      content: ['', [Validators.required]],
      tags: ''
    });
  }

  onReady(): void {
    // remove os elementos abaixo para os inputs do editor ficarem na mesma linha
    $(".cke_toolbar_break").remove();
  }

  // adiciona uma tag ao post
  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add the tag
    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.postForm.controls.tags.setErrors(null);
  }

  remove(tag: string): void {
    let index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }

    this.validaTags();
  }

  changeContent($event: any) {
    this.content = $event;
  }

  validaTags(): void {
    if (this.tags.length == 0) {
      this.postForm.controls.tags.setErrors({'incorrect': true});
    } else {
      this.postForm.controls.tags.setErrors(null);
    }
  }

  savePost(): void {
    this.validaTags();
    // console.log(this.postForm)
    // stop here if form is invalid
    if (this.postForm.invalid) {
      this.postForm.get('categoria').markAsTouched();
      this.postForm.get('assunto').markAsTouched();
      this.postForm.get('content').markAsTouched();
      this.postForm.get('tags').markAsTouched();

      this.snackBar.open("Corrija os erros para submeter o post!", "erro validação", {
        duration: 2000,
      });

      return;
    }

    this.snackBar.open("Seu post foi salvo com sucesso!", "Post Salvo", {
      duration: 2000,
    });
  }
}
