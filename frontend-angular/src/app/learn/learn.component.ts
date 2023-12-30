import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LearningPackageService } from "../services/learning-package.service";

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  selectedPackageId: number | null = null;
  selectedPackage: any = null; // Property to hold the selected package details
  public learningPackages: any[] = [];
  public learningFacts: any[] = [];

  constructor(private router: Router, private packageService: LearningPackageService) {}

  ngOnInit(): void {
    this.packageService.getAllPackages().subscribe(data => {
      this.learningPackages = data;
    }, error => {
      console.error('Error fetching learning packages:', error);
    });
  }

  onPackageChange(): void {
    this.selectedPackage = this.learningPackages.find(pkg => pkg.LearningPackageID === Number(this.selectedPackageId)) || null;
    this.packageService.getPackageFacts(Number(this.selectedPackageId)).subscribe( data => {
      this.learningFacts = data;
    }, error => {
      console.error('Error fetching learning facts:',error)
    })
  }

  navigateLearn(id: number | null) {

      if (id !== null) {
        if(this.learningFacts.length>0)
        {
        this.router.navigate([`/learn/${id}`]);
        }
        else
        {
          alert("No fact in this package")
        }
      }
      else { alert("Invalid package selected"); }


  }
}
