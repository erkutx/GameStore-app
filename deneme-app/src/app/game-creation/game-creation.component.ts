import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GameDataService } from '../game-data.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-creation',
  templateUrl: './game-creation.component.html',
  styleUrls: ['./game-creation.component.css'],
})
// game-creation.component.ts
export class GameCreationComponent implements OnInit {
  gameForm: FormGroup;
  // Add a new member variable to hold the file
  file?: File;

  constructor(
    private fb: FormBuilder,
    private gameDataService: GameDataService,
    private router: Router
  ) {
    this.gameForm = this.fb.group({
      name: [''],
      bundle: [''],
      owner: [''],
      icon: [''], // bind the file input to this form control
    });
  }

  ngOnInit(): void {}

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  onSubmit() {
    const game = this.gameForm.value;
    // Add the file to the game object
    game.icon = this.file;
    this.gameDataService.addGame(game);
    this.router.navigate(['/game-list']);
  }
}
