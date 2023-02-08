import { Component, Input, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { ICharacter } from 'src/app/models/character';
import { CharService } from 'src/app/services/char.service';
import { Unsubscribe } from 'src/app/services/unsubscribe.service';

@Component({
  selector: 'app-random-char',
  templateUrl: './random-char.component.html',
  styleUrls: ['./random-char.component.scss']
})
export class RandomCharComponent extends Unsubscribe implements OnInit{
  @Input() char!: ICharacter;

  constructor(private charService: CharService){
    super();
  }

  ngOnInit() {
    this.charService.getRandomChar()
    .pipe(takeUntil(this.destroy$))
    .subscribe(char =>{
      this.char = char;
    }
    )
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
