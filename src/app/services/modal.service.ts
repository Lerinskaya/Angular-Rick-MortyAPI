import { Injectable, Input } from '@angular/core';
import { BehaviorSubject, takeUntil } from 'rxjs';
import { ICharacter } from '../models/character';
import { CharService } from './char.service';
import { Unsubscribe } from './unsubscribe.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService extends Unsubscribe{

  isVisible$ = new BehaviorSubject<boolean>(false);
  @Input() character!: ICharacter;
  // @Input() id:number = this.character.id;

  open(id:number) {
    this.isVisible$.next(true);
    this.getChar(id);
  }
  close() {
    this.isVisible$.next(false)
  }
  getChar(id:number){
    this.charService.getById(id)
    .pipe(takeUntil(this.destroy$))
    .subscribe(character =>{
      this.character = character;
      console.log(this.character)
    }
    )
  }

  constructor(private charService: CharService) { 
    super();
  }
}
