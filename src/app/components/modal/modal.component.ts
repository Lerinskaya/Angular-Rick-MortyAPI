import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from 'src/app/models/character';
import { CharService } from 'src/app/services/char.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
 @Input() character!: ICharacter;
 @Output() btnClick = new EventEmitter<false>();

constructor(public charService: CharService){}

public closeModal(){
    this.btnClick.emit(false);
  }
}
