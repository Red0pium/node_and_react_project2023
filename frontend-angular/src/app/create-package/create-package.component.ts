import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LearningPackageService} from "../services/learning-package.service";

@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrl: './create-package.component.css'
})
export class CreatePackageComponent implements OnInit{

  enteredTitle: string = '';
  enteredDescription: string = '';
  enteredCategory: string = '';
  selectedTargetAudience: string = '';
  selectedLevel: string = '';

  public learningPackages: any[] = [];

  constructor(private router: Router, private packageService : LearningPackageService) {
  }

  ngOnInit(): void {
    this.packageService.getAllPackages().subscribe(data => {
      this.learningPackages = data;
    }, error => {
      console.error('Error fetching learning packages:', error);
    });
  }

  createPackage() {
    if (this.enteredTitle === '' ) {
      alert('No name entered');
      return;
    }
    if (this.enteredCategory === '') {
      alert('No category entered');
      return;
    }
    if (this.selectedTargetAudience === '') {
      alert('No target audience selected');
      return;
    }
    if (this.selectedLevel === '') {
      alert('No difficulty level selected');
      return;
    }
    const userConfirmed = confirm('Are you sure you want to create the package ?');
    if (userConfirmed) {

      const packageData = {
        Title: this.enteredTitle,
        Description: this.enteredDescription,
        Category: this.enteredCategory,
        TargetAudience: this.selectedTargetAudience,
        DifficultyLevel: this.selectedLevel
      };

      this.packageService.createPackage(packageData).subscribe(response => {
        console.log('Package created successfully:', response);
        alert("Package created");
        this.navigateTo('home');
      }, error => {
        console.error('Error creating the package:', error);
      });
    } else {
      this.navigateTo('create-package');}
  }

  navigateTo(destination: string) {
    this.router.navigate([`/${destination}`]);
  }

  protected readonly parseInt = parseInt;
}
