import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterDetailService {

    constructor(private http: HttpClient) {}

    returnCharacter(index: number) {
      let query = 'https://rickandmortyapi.com/api/character/';

      query += index;

      return this.http.get(query);
    }
}
