import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent {
  constructor(private router: Router) {}

  navigateHome() {
    this.router.navigate(['/home']);
  }

  // Ajoutez des méthodes pour gérer la sélection et la navigation pour le bouton LEARN
}
