import { Pipe, PipeTransform } from '@angular/core';
import { ICharacter } from '../models/character';

@Pipe({
  name: 'filterCharacters'
})
export class FilterPipe implements PipeTransform {

  transform(characters: ICharacter[], search: string): ICharacter[] {
    return characters.filter(p=>p.name.toLowerCase().includes(search.toLowerCase()))
  }
}