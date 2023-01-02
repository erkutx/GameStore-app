import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../game-data.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit {
  games: any[] = [];

  constructor(private gameDataService: GameDataService) {}

  ngOnInit(): void {
    this.gameDataService.getGames().subscribe((games) => {
      this.games = games;
    });
  }
  deleteGame(game: any) {
    const index = this.games.indexOf(game);
    if (index > -1) {
      this.games.splice(index, 1);
    }
  }
}
