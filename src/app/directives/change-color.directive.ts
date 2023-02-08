import { Directive, ElementRef } from '@angular/core';
import { ICharacter } from '../models/character';
import { CharService } from '../services/char.service';
// import {characters as data} from '../../data/character-data';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
  // characters:ICharacter[] = data;

  constructor(public el: ElementRef, public charService: CharService) { }

  // this.charService.getAll().subscribe(character => {
  //   (character.status) => {
    // characters.map( char => char.status);
    //   if(char.status === 'alive') {
    //     this.el.nativeElement.classList.add('green');
    //   } else if(char.status === 'dead') {
    //     this.el.nativeElement.classList.add('red');
    //   } else {
    //     this.el.nativeElement.classList.add('default');
    //   }
  //   })
  // })
}
