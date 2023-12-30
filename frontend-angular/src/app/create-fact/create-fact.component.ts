import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LearningFactService} from "../services/learning-fact.service";
import {LearningPackageService} from "../services/learning-package.service";

@Component({
  selector: 'app-create-fact',
  templateUrl: './create-fact.component.html',
  styleUrl: './create-fact.component.css'
})
export class CreateFactComponent implements OnInit{

  selectedPackageId: number | null = null;
  enteredQuestion: string = '';
  enteredAnswer: string = '';

  public learningFacts: any[] = [];
  public learningPackages: any[] = [];

  constructor(private router: Router, private factService : LearningFactService, private packageService : LearningPackageService) { }

  ngOnInit(): void {
    this.factService.getAllFacts().subscribe(data => {
      this.learningFacts = data;
    }, error => {
      console.error('Error fetching learning packages:', error);
    });
    this.packageService.getAllPackages().subscribe(data => {
      this.learningPackages = data;
    }, error => {
      console.error('Error fetching learning packages:', error);
    });
  }

  createFact() {
    if (this.selectedPackageId === null ) {
      alert('No package selected');
      return;
    }
    if (this.enteredQuestion === '') {
      alert('No question filled');
      return;
    }
    if (this.enteredAnswer === '') {
      alert('No answer filled');
      return;
    }
    const userConfirmed = confirm('Are you sure you want to create the fact ?');
    if (userConfirmed) {

        const factData = {
          LearningPackageID: this.selectedPackageId,
          recto: this.enteredQuestion,
          verso: this.enteredAnswer,
        };

        this.factService.createFact(factData).subscribe(response => {
          console.log('Fact created successfully:', response);
          alert("Fact created")
          // Handle any additional logic after successful update
          this.navigateTo('home');
        }, error => {
          console.error('Error creating the fact:', error);
        });
    } else {
      this.navigateTo('create-fact');}
  }

  navigateTo(destination: string) {
    this.router.navigate([`/${destination}`]);
  }


  protected readonly parseInt = parseInt;
}
