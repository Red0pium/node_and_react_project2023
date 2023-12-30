import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LearningPackageService } from "../services/learning-package.service";

@Component({
  selector: 'app-modidel-package',
  templateUrl: './modidel-package.component.html',
  styleUrl: './modidel-package.component.css'
})

export class ModidelPackageComponent implements OnInit {
  selectedPackageId: number | null = null;
  selectedTitle: string = '';
  selectedDescription: string = '';
  selectedCategory: string = '';
  selectedTargetAudience: string = '';
  selectedLevel: string = '';

  public learningPackages: any[] = [];

  constructor(private router: Router, private packageService: LearningPackageService) {}

  ngOnInit(): void {
    this.packageService.getAllPackages().subscribe(data => {
      this.learningPackages = data;
    }, error => {
      console.error('Error fetching learning packages:', error);
    });
  }

  onPackageSelect() {
    // Find the selected package by its ID
    const selectedId = Number(this.selectedPackageId);
    const selectedPackage = this.learningPackages.find(pkg => pkg.LearningPackageID === selectedId);
    console.log(selectedPackage.DifficultyLevel)

    if (selectedPackage) {
      // Update form fields with the selected package's information
      this.selectedTitle = selectedPackage.Title;
      this.selectedDescription = selectedPackage.Description;
      this.selectedCategory = selectedPackage.Category;
      this.selectedTargetAudience = selectedPackage.TargetAudience;
      this.selectedLevel = selectedPackage.DifficultyLevel;
    } else {
      // Reset the form if no package is selected or found
      this.selectedTitle = '';
      this.selectedDescription = '';
      this.selectedCategory = '';
      this.selectedTargetAudience = '';
      this.selectedLevel = '';
    }
  }

  modifyPackage() {
    if (this.selectedPackageId === null) {
      alert('No package selected');
      return;
    }
    if (this.selectedTitle === '')
    {
      alert("Invalid title")
      return;
    }
    if (this.selectedCategory === '')
    {
      alert("Invalid category")
      return;
    }
    if (this.selectedTargetAudience === '')
    {
      alert("Invalid target audience")
      return;
    }
    if (this.selectedLevel === '')
    {
      alert("Invalid difficulty")
      return;
    }

    const userConfirmed = confirm('Are you sure you want to modify this package?');
    if (userConfirmed) {
      const packageData = {
        Title: this.selectedTitle,
        Description: this.selectedDescription,
        Category: this.selectedCategory,
        TargetAudience: this.selectedTargetAudience,
        DifficultyLevel: this.selectedLevel
      };

      this.packageService.updatePackage(this.selectedPackageId, packageData).subscribe(response => {
        console.log('Package updated successfully:', response);
        alert("Package updated");
        this.navigateTo('home');
      }, error => {
        console.error('Error updating the package:', error);
      });
    }
  }


  confirmDelete() {
    if (this.selectedPackageId === null) {
      alert('No package selected');
      return;
    }
    const userConfirmed = confirm("Are you sure you want to delete this package **and all of his facts**?");
    if (userConfirmed) {
      this.packageService.deletePackage(this.selectedPackageId).subscribe(response => {
        console.log("Package deleted successfully")
        alert("Package deleted")
        this.navigateTo('home');
      }, error => {
        console.error('Error deleting the package:', error);
      });
    } else {
      this.navigateTo('modidel-package');
    }
  }

  navigateTo(destination: string) {
    this.router.navigate([`/${destination}`]);
  }

  protected readonly parseInt = parseInt;
}
