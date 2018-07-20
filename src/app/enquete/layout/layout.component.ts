import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-enquete-layout',
  templateUrl: './layout.component.html'
})
export class EnqueteLayoutComponent implements OnInit {

  @Input() enquete;
  selectedOption: number = null;
  submitted: boolean = false;

  ngOnInit() {
    this.selectedOption = this.enquete.selectedOption;
    this.submitted = this.enquete.selectedOption == null ? false : true;
  }

  selectOption(value: number) {
    this.selectedOption = value;
  }

  submitEnquete() {
    this.submitted = true;

    $.notify({
      title: 'Enquete ' + this.enquete.numero + ' respondida.',
      message: 'Obrigado por responder a enquete! <i class="fa fa-heart text-light"></i>'
    }, {
      type: 'primary',
      timer: 3000,
      template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="material-icons">close</i></button>' +
        '<i class="material-icons" data-notify="icon">assignment</i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
      '</div>'
    });
  }
}
