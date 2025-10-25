import { Routes } from '@angular/router';
import {App} from './app';
import {Home} from './maincomps/home/home';
import {NotFound} from './maincomps/not-found/not-found';

export const routes: Routes = [
  {path: "", component: Home, title: 'Home'},
  {path: "**", component: NotFound, title: 'Not Found'},
];
