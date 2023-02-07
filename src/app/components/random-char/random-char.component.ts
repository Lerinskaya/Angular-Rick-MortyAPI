import { Component, Input } from '@angular/core';
import { takeUntil } from 'rxjs';
import { ICharacter } from 'src/app/models/character';
import { CharService } from 'src/app/services/char.service';
import { Unsubscribe } from 'src/app/services/unsubscribe.service';
import {characters as data} from '../../data/character-data';

@Component({
  selector: 'app-random-char',
  templateUrl: './random-char.component.html',
  styleUrls: ['./random-char.component.scss']
})
export class RandomCharComponent extends Unsubscribe{
  @Input() character!: ICharacter;
  char: ICharacter[] = data;
  constructor(private charService: CharService){
    super();
  }
  getChar() {
    this.charService.getRandomChar()
    .pipe(takeUntil(this.destroy$))
    .subscribe(char =>{
      console.log(this.char)
      this.char = char;
    }
    )
  }
}
