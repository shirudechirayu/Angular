import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologyComponent } from './technology/technology.component';
import { WrongChoiceComponent } from './wrong-choice/wrong-choice.component';

const routes: Routes = [
  {path:'books', component: BooksComponent},
  {path:'technology', component: TechnologyComponent},
  {path:'', component: TechnologyComponent},
  {path:'**', component: WrongChoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
