import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, catchError, throwError, retry, of } from "rxjs";
import { ICharacter } from "../models/character";

@Injectable({
    providedIn: 'root'
})
export class CharService {
  
    constructor(private http: HttpClient){}

    getAll(): Observable<ICharacter[]> {
        return this.http.get<ICharacter[]>('https://rickandmortyapi.com/api/character/1,2,3,4,5,6', {
            params: new HttpParams().append('limit', 6)
        }).pipe(
            retry(2),
            catchError((err) => {
                return throwError(()=>err.message)
              })
        )
    }

    getRandomChar(): Observable<ICharacter[]> {
        return this.http.get<ICharacter[]>(`https://rickandmortyapi.com/api/character/${Math.floor(Math.random() * 80)}`)
        .pipe(
            retry(2),
            catchError((err) => {
                return throwError(()=>err.message)
              })
        )
    }
}
