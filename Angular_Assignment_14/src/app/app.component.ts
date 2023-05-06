import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Assignment_14';

  constructor(private formBuilder : FormBuilder){

  }

  MarvellousForm = this.formBuilder.group(
    {
      firstName:['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      lastName:['', [Validators.required, Validators.pattern("^[a-zA-Z]*$")]],
      email:['', [Validators.required, Validators.pattern("^[a-zA-Z0-9]+(@[a-zA-Z0-9]{1,})+\\.[a-z]{2,}$")]],
      phone:[,[Validators.required, Validators.pattern("^[0-9]{10}$")]],
      city:['', [Validators.required, Validators.minLength(4), Validators.pattern("^[a-zA-Z]*$")]],
      state:[''],
      zipCode:[, Validators.pattern("^[0-9]{5}$")],
      comments:['', [Validators.minLength(30)]]
    }
  )
}
