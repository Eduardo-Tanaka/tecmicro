import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-footer-cmp',
  templateUrl: 'footer.component.html'
})

export class FooterComponent {
  anoAtual: Date = new Date();

  constructor(private snackBar: MatSnackBar) { }

  sairLista(): void {
    this.snackBar.open("Seu nome foi retirado da lista!", "Saiu da lista", {
      duration: 2000,
    });
  }
}
