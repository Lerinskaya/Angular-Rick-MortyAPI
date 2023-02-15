import { Component, OnInit} from '@angular/core';
import { ICharacter } from 'src/app/models/character';
import { CharService } from 'src/app/services/char.service';
import { Unsubscribe } from 'src/app/services/unsubscribe.service';
import {characters as data} from '../../data/character-data';
import { takeUntil } from 'rxjs/operators';
import { PAGE_NUMBER, PER_PAGE } from 'src/app/data/vars';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent extends Unsubscribe implements OnInit{
  public characters: ICharacter[] = data;
  public character!:ICharacter;

  public isVisible = false;
  public loading = false;
  public loader = false;

  public str = '';
  public pageNumber = PAGE_NUMBER
  public itemsPerPage = PER_PAGE;
  public totalChar:unknown;

  constructor(private charService: CharService){
    super();
  }

public onChange(change: boolean): void {
    if (!change) {
      this.isVisible = false
    } 
 }
 
public openModal(id:number){
  this.loader = true;
  this.charService.getById(id)
  .pipe(takeUntil(this.destroy$))
  .subscribe(character =>{
    this.character = character;
    this.isVisible = true;
    this.loader = false;
  }
  )
  }

  ngOnInit():void {
    this.loading = true;
    this.charService.getAll()
    .pipe(takeUntil(this.destroy$))
    .subscribe(characters =>{
      this.characters = characters;
      this.totalChar = characters.length;
      this.loading = false;
    }
    )
  }
}
