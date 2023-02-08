import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, catchError, throwError, retry } from "rxjs";
import { ICharacter } from "../models/character";

@Injectable({
    providedIn: 'root'
})
export class CharService {
  
    constructor(private http: HttpClient){}

    getAll(): Observable<ICharacter[]> {
        return this.http.get<ICharacter[]>('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22')
        .pipe(
            retry(2),
            catchError((err) => {
                return throwError(()=>err.message)
              })
        )
    }

    getRandomChar(): Observable<ICharacter> {
        return this.http.get<ICharacter>(`https://rickandmortyapi.com/api/character/${Math.floor(Math.random() * 100)}`)
        .pipe(
            retry(2),
            catchError((err) => {
                return throwError(()=>err.message)
              })
        )
    }
    getById(id:number): Observable<ICharacter> {
        return this.http.get<ICharacter>(`https://rickandmortyapi.com/api/character/${id}`)
        .pipe(
            retry(2),
            catchError((err) => {
                return throwError(()=>err.message)
              })
        )
    }
}

