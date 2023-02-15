import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, throwError, retry } from "rxjs";
import { ICharacter } from "../models/character";
import { Unsubscribe } from "./unsubscribe.service";

@Injectable({
    providedIn: 'root'
})
export class CharService extends Unsubscribe{
   private url =' https://rickandmortyapi.com/api/character/'
  
    constructor(private http: HttpClient){
        super();
    }

    public getAll(): Observable<ICharacter[]> {
       return this.http.get<ICharacter[]>(`${this.url}1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22`)
        .pipe(
            retry(2),
            catchError((err) => {
                return throwError(()=>err.message)
              })
        )
    }

    public getRandomChar(): Observable<ICharacter> {
        return this.http.get<ICharacter>(`${this.url}${Math.floor(Math.random() * 100)}`)
        .pipe(
            retry(2),
            catchError((err) => {
                return throwError(()=>err.message)
              })
        )
    }
    public getById(id:number): Observable<ICharacter> {
        return this.http.get<ICharacter>(`${this.url}${id}`)
        .pipe(
            retry(2),
            catchError((err) => {
                return throwError(()=>err.message)
              })
        )
    }
}

