import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/models/character';
import { CharService } from 'src/app/services/char.service';
import { Unsubscribe } from 'src/app/services/unsubscribe.service';
import {characters as data} from '../../data/character-data';
import { takeUntil } from 'rxjs/operators';
import { ModalService } from 'src/app/services/modal.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent extends Unsubscribe implements OnInit{
  characters: ICharacter[] = data;
  // @Input() character!: ICharacter;
  // id:number = this.character.id;
  str = '';
  p = 1;
  itemsPerPage = 6;
  totalChar:any;

  constructor(public charService: CharService,
    public  modalService: ModalService){
    super();
  }
  ngOnInit():void {
    this.charService.getAll()
    .pipe(takeUntil(this.destroy$))
    .subscribe(characters =>{
      this.characters = characters;
      this.totalChar = characters.length;
    }
    )
  }
  openModal(id:number){
    this.modalService.open(id);
  }
  isVisible(){
    this.modalService.isVisible$
  }
}
