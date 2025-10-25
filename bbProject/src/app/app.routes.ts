import { Routes } from '@angular/router';
import {App} from './app';
import {Home} from './maincomps/home/home';
import {NotFound} from './maincomps/not-found/not-found';
import {Overall} from './maincomps/overall/overall';
import {SavePlace} from './maincomps/save-place/save-place';

export const routes: Routes = [
  {path: "", component: Home, title: 'Home'},
  {path: "overall", component: Overall, title: 'Overall'},
  {path: "saveplaces", component: SavePlace, title: 'Save Places'},
  {path: "**", component: NotFound, title: 'Not Found'},
];
