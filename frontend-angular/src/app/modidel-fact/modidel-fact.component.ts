import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LearningFactService} from "../services/learning-fact.service";
import {LearningPackageService} from "../services/learning-package.service";

@Component({
  selector: 'app-modidel-fact',
  templateUrl: './modidel-fact.component.html',
  styleUrl: './modidel-fact.component.css'
})
export class ModidelFactComponent implements OnInit{

  selectedFactId: number | null = null;
  selectedPackageId: number | null = null;
  selectedQuestion: string = '';
  selectedAnswer: string = '';
  selectedGeneralPackageID: number | null = null;

  public selectedFact:any;
  public selectedPackage:any;
  public learningFacts: any[] = [];
  public learningPackages: any[] = [];
  constructor(private router: Router,private factService : LearningFactService, private packageService : LearningPackageService) {}

  navigateTo(destination: string) {
      this.router.navigate([`/${destination}`]);
  }

  onFactSelect() {
      const selectedId = Number(this.selectedFactId);
      this.selectedFact = this.learningFacts.find(fact => fact.ID === selectedId);

      if (this.selectedFact) {
          this.selectedQuestion = this.selectedFact.recto; // assuming 'recto' is the question
          this.selectedAnswer = this.selectedFact.verso;  // assuming 'verso' is the answer
          this.selectedPackageId = this.selectedFact.LearningPackageID;
      }
  }

  onGenPackageSelect():void {
    const selectedGenId = Number(this.selectedGeneralPackageID)
    console.log("selected gen package ID",this.selectedGeneralPackageID)
    if (!isNaN(selectedGenId) && selectedGenId !==0)
    {
      console.log("selectedGenID",selectedGenId)
      this.factService.getFactsByPackageId(selectedGenId).subscribe( data => {
        this.learningFacts = data;
      }, error => {
        console.error('Error fetching learning facts:', error);
      });
    }
    else
    {
      this.factService.getAllFacts().subscribe( data => {
        this.learningFacts = data;
      }, error => {
        console.error('Error fetching learning facts:', error);
      });
    }
    this.selectedFactId = null
    this.selectedPackageId = null
    this.selectedQuestion = '';
    this.selectedAnswer = '';
    this.selectedGeneralPackageID = null;
  }

    modifyFact() {
        if (this.selectedFactId === null) {
            alert('No fact selected');
            return;
        }
        if (this.selectedQuestion === '') {
          alert('Invalid question');
          return;
        }
        if (this.selectedAnswer === '') {
          alert('Invalid answer');
          return;
        }
        if (this.selectedPackageId === null) {
          alert('Invalid package');
          return;
        }

        const userConfirmed = confirm('Are you sure you want to modify the fact ?');
        if (userConfirmed) {
          if (this.selectedFactId !== null)
          {

            const factData = {
              LearningPackageID: this.selectedPackageId,
              recto: this.selectedQuestion,
              verso: this.selectedAnswer,
            };

            this.factService.updateFact(this.selectedFactId, factData).subscribe(response => {
              console.log('Fact updated successfully:', response);
              alert("Fact updated")
              // Handle any additional logic after successful update
              this.navigateTo('home');
            }, error => {
              console.error('Error updating the fact:', error);
            });

          }
          this.navigateTo('home');
        } else {
          this.navigateTo('modidel-fact');}
      }

  ngOnInit(): void {
      this.factService.getAllFacts().subscribe(data => {
          this.learningFacts = data;
      }, error => {
          console.error('Error fetching learning facts:', error);
      });
      this.packageService.getAllPackages().subscribe(data => {
          this.learningPackages = data;
      }, error => {
          console.error('Error fetching learning packages:', error);
      });
  }

  confirmDelete() {
      if (this.selectedFactId === null) {
          alert('No fact selected');
          return;
      }
    const userConfirmed = confirm('Are you sure you want to delete fact ' + this.selectedFactId + ' ?');
    if (userConfirmed) {
        if (this.selectedFactId !== null)
        {
            console.log(this.factService.deleteFact(this.selectedFactId).subscribe());
            alert("Fact deleted")
        }
        this.navigateTo('home');
    } else {
        this.navigateTo('modidel-fact');}
  }

  protected readonly parseInt = parseInt;
}
