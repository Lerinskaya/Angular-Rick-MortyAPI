import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'about', component: CharacterPageComponent,
  children: [
    { path: 'profile', component: ModalComponent },
  ],},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  // test
})
export class AppRoutingModule { }
