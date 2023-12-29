import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LearningPackageService } from "../services/learning-package.service";

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent  implements OnInit {
  selectedPackageId: number | null = null;
  displayText: string = ''; // This will hold the text to display
  public learningPackages: any[] = [];

  constructor(private router: Router,private packageService: LearningPackageService) {}

  ngOnInit(): void {
    this.packageService.getAllPackages().subscribe(data => {
      this.learningPackages = data;
    }, error => {
      console.error('Error fetching learning packages:', error);
    });
    }

  navigateHome() {
    this.router.navigate(['/home']);
  }

  // Ajoutez des méthodes pour gérer la sélection et la navigation pour le bouton LEARN
}
