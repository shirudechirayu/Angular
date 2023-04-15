import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <label for="marvellous">Marvellous Infosystems</label><br>
      <input type="text" id="marvellous">
  `,
  styles: [
    `
      label{
        color:blue;
      }
    `
          ]
})
export class AppComponent {
  title = 'Q3';
}
