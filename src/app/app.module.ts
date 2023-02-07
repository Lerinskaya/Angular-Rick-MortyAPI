import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { RandomCharComponent } from './components/random-char/random-char.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterCardComponent,
    CardListComponent,
    FilterPipe,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    CharacterPageComponent,
    RandomCharComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
