import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Atalho para importar tudo do Ionic
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink],
})
export class HomePage {}