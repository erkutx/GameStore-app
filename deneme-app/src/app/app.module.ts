import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameCreationComponent } from './game-creation/game-creation.component';
import { GameDataService } from './game-data.service';

const routes: Routes = [
  { path: 'game-list', component: GameListComponent },
  { path: 'game-creation', component: GameCreationComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameListComponent,
    GameCreationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [GameDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
