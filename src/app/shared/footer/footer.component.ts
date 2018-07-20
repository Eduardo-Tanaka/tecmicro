import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-footer-cmp',
  templateUrl: 'footer.component.html'
})
export class FooterComponent {
  anoAtual: Date = new Date();
  conviteForm: FormGroup;

  constructor(private snackBar: MatSnackBar, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.conviteForm = this.formBuilder.group({
      matricula: ['', [ Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(6), Validators.minLength(6) ]]
    });
  }

  convidar() {
    if (this.conviteForm.invalid) {
      this.conviteForm.get('matricula').markAsTouched();

      this.snackBar.open("Digite uma matrícula válida!", "erro validação", {
        duration: 2000,
      });

      return;
    }

    this.snackBar.open("Convide enviado!", "Saiu da lista", {
      duration: 2000,
    });
  }
}
