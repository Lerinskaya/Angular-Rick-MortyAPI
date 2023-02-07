import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Unsubscribe implements OnDestroy {
    protected destroy$: Subject<void> = new Subject<void>();

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
