import { Component, Input } from '@angular/core';
import { takeUntil } from 'rxjs';
import { ICharacter } from 'src/app/models/character';
import { CharService } from 'src/app/services/char.service';
import { ModalService } from 'src/app/services/modal.service';
import { Unsubscribe } from 'src/app/services/unsubscribe.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent extends Unsubscribe{
  @Input() character!: ICharacter;
  // @Input() id = this.character.id;

constructor(
  public modalService: ModalService,
  public charService: CharService){
    super();
  }

 ngOnInit():void {
      console.log(this.character.name)
}
}
