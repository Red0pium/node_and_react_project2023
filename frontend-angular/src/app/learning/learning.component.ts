import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { LearningPackageService } from '../services/learning-package.service';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {
  selectedRating:number=0;
  allFactsAnswered: boolean = false;
  selectedPackage: any = null;
  selectedPackageId: number | null = null;
  learningFacts: any[] = [];
  currentFactIndex: number = 0;
  showAnswer: boolean = false;
  currentFact: any = null;
  ngood:number=0;
  navg:number=0;
  nbad:number=0;

  constructor(private router: Router, private route: ActivatedRoute, private packageService: LearningPackageService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.selectedPackageId = Number(params.get('selectedPackageId'));
    });
    if (this.selectedPackageId !== null) {
      this.packageService.getPackageById(this.selectedPackageId).subscribe(data => {
        this.selectedPackage = data;
        console.log("selected package: ", this.selectedPackage);
      });

      this.packageService.getPackageFacts(this.selectedPackageId).subscribe(data => {
        this.learningFacts = this.shuffleArray(data);
        console.log("learning facts: ", this.learningFacts);
        // Set the first fact as the current fact
        if (this.learningFacts.length > 0) {
          this.currentFact = this.learningFacts[this.currentFactIndex];
        }
      }, error => {
        console.error('Error fetching learning facts:', error);
      });
    }
  }

  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  onClick(): void {
    if (this.showAnswer) {
      if (Number(this.selectedRating)===0)
      {
        alert("Select a rating")
      }
      else {
        if (Number(this.selectedRating) === 1) {
          this.ngood += 1;
        } else if (Number(this.selectedRating) === 2) {
          this.navg += 1;
        } else if (Number(this.selectedRating) === 3) {
          this.nbad += 1;
        }
        this.currentFactIndex++;
        if (this.currentFactIndex < this.learningFacts.length) {
          this.currentFact = this.learningFacts[this.currentFactIndex];
          // Toggle the showAnswer flag
          this.showAnswer = !this.showAnswer;
          this.selectedRating=0
        } else {
          this.navigateTo(`learn/results/${this.ngood}/${this.navg}/${this.nbad}`)
        }
      }
    }
    else
    {
      if (this.currentFactIndex === this.learningFacts.length-1)
      {
        this.allFactsAnswered = true;
        console.log('No more facts to learn.');
      }
      // Toggle the showAnswer flag
      this.showAnswer = !this.showAnswer;
    }
  }

  navigateTo(destination: string) {
    this.router.navigate([`/${destination}`]);
  }

}
