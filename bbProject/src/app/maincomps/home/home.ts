import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { Navbar } from '../../subcomps/navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [
    Navbar, 
    ButtonModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
