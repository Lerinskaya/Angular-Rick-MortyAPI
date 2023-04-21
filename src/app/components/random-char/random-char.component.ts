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
  public char!: ICharacter;
  @Input() loading!: boolean;

  constructor(private charService: CharService){
    super();
  }

  ngOnInit() {

    this.getChar();
  }

public getChar() {
  this.loading = true;
    this.charService.getRandomChar()
    .pipe(takeUntil(this.destroy$))
    .subscribe(char =>{
      this.char = char;
      this.loading = false;
    }
    )
  }
}
