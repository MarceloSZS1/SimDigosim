import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importante para o ngModel
import { IonicModule } from '@ionic/angular';
import { FirebaseService } from '../services/firebase';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-adicionar-contato',
  templateUrl: './adicionar-contato.page.html',
  styleUrls: ['./adicionar-contato.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class AdicionarContatoPage {
  private firebaseService = inject(FirebaseService);
  private router = inject(Router);

  nome = '';
  email = '';

  async salvar() {
    if (this.nome && this.email) {
      await this.firebaseService.addContato({ nome: this.nome, email: this.email });
      this.router.navigate(['/listar-contatos']);
    }
  }
}