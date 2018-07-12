import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'textsize' })
export class TextSizePipe implements PipeTransform {
  transform(text: string, tamanho: number): string {
    if (text.length < tamanho) {
      return text;
    } else {
      return text.substr(0, tamanho) + " ..."; 
    }
  }
}