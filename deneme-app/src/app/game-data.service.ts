import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameDataService {
  games: any[] = [];
  http: any;

  constructor() {}

  addGame(game: any) {
    this.games.push(game);
  }

  getGames(): Observable<any[]> {
    return of(this.games);
  }
  deleteGame(game: any) {
    this.http.delete(`api/games/${game.id}`).subscribe(() => {
      const index = this.games.indexOf(game);
      if (index > -1) {
        this.games.splice(index, 1);
      }
    });
  }
}
