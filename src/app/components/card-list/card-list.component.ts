import { Component, Input, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/models/character';
import { CharService } from 'src/app/services/char.service';
import { Unsubscribe } from 'src/app/services/unsubscribe.service';
import {characters as data} from '../../data/character-data';
import { takeUntil } from 'rxjs/operators';

// enum Status = {
//  'alive'= alive,
//  'dead'= dead,
//  'unknown' = unknown
// }

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent extends Unsubscribe implements OnInit{
  @Input() status!: string;
  characters: ICharacter[] = data;
  str = '';
  p = 1;
  itemsPerPage = 6;
  totalChar:any;

  constructor(private charService: CharService){
    super();
  }
  ngOnInit():void {
    this.charService.getAll()
    .pipe(takeUntil(this.destroy$))
    .subscribe(characters =>{
      this.characters = characters;
      this.totalChar = characters.length;
      console.log(this.characters[6].status)
    }
    )
  }
}
