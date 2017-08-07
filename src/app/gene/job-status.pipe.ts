import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


@Pipe({
  name: 'jobStatus'
})
export class JobStatusPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer){}
  transform(value: any, args?: any): any {
    let html = '';
    switch (value){
      case ('F'):
        html = `<span class="glyphicon glyphicon-ok-sign" aria-hidden="true"></span>`;
        break;
      case ('P'):
        html = `<span class="glyphicon glyphicon-refresh" aria-hidden="true"></span>`;
        break;
      case ('E'):
        html = `<span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>`;
        break;
      default:
        html = `<span class="glyphicon glyphicon-warning-sign" aria-hidden="true"></span>`;
    }
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
