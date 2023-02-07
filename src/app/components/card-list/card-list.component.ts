import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/models/character';
import { CharService } from 'src/app/services/char.service';
import { Unsubscribe } from 'src/app/services/unsubscribe.service';
import {characters as data} from '../../data/character-data';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent extends Unsubscribe implements OnInit{
  characters: ICharacter[] = data;
  str = ''

  constructor(private charService: CharService){
    super();
  }
  ngOnInit():void {
    this.charService.getAll()
    .pipe(takeUntil(this.destroy$))
    .subscribe(characters =>{
      this.characters = characters;
    }
    )
  }
}
