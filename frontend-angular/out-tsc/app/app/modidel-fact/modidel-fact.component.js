import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ModidelFactComponent = class ModidelFactComponent {
    constructor(router, factService, packageService) {
        this.router = router;
        this.factService = factService;
        this.packageService = packageService;
        this.selectedFactId = null;
        this.selectedPackageId = null;
        this.selectedQuestion = '';
        this.selectedAnswer = '';
        this.selectedGeneralPackageID = null;
        this.learningFacts = [];
        this.learningPackages = [];
        this.parseInt = parseInt;
    }
    navigateTo(destination) {
        this.router.navigate([`/${destination}`]);
    }
    onFactSelect() {
        const selectedId = Number(this.selectedFactId);
        this.selectedFact = this.learningFacts.find(fact => fact.ID === selectedId);
        if (this.selectedFact) {
            this.selectedQuestion = this.selectedFact.recto; // assuming 'recto' is the question
            this.selectedAnswer = this.selectedFact.verso; // assuming 'verso' is the answer
            this.selectedPackageId = this.selectedFact.LearningPackageID;
        }
    }
    onGenPackageSelect() {
        const selectedGenId = Number(this.selectedGeneralPackageID);
        console.log("selected gen package ID", this.selectedGeneralPackageID);
        if (!isNaN(selectedGenId) && selectedGenId !== 0) {
            console.log("selectedGenID", selectedGenId);
            this.factService.getFactsByPackageId(selectedGenId).subscribe(data => {
                this.learningFacts = data;
            }, error => {
                console.error('Error fetching learning facts:', error);
            });
        }
        else {
            this.factService.getAllFacts().subscribe(data => {
                this.learningFacts = data;
            }, error => {
                console.error('Error fetching learning facts:', error);
            });
        }
        this.selectedFactId = null;
        this.selectedPackageId = null;
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
            if (this.selectedFactId !== null) {
                const factData = {
                    LearningPackageID: this.selectedPackageId,
                    recto: this.selectedQuestion,
                    verso: this.selectedAnswer,
                };
                this.factService.updateFact(this.selectedFactId, factData).subscribe(response => {
                    console.log('Fact updated successfully:', response);
                    alert("Fact updated");
                    // Handle any additional logic after successful update
                    this.navigateTo('home');
                }, error => {
                    console.error('Error updating the fact:', error);
                });
            }
            this.navigateTo('home');
        }
        else {
            this.navigateTo('modidel-fact');
        }
    }
    ngOnInit() {
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
            if (this.selectedFactId !== null) {
                console.log(this.factService.deleteFact(this.selectedFactId).subscribe());
                alert("Fact deleted");
            }
            this.navigateTo('home');
        }
        else {
            this.navigateTo('modidel-fact');
        }
    }
};
ModidelFactComponent = __decorate([
    Component({
        selector: 'app-modidel-fact',
        templateUrl: './modidel-fact.component.html',
        styleUrl: './modidel-fact.component.css'
    })
], ModidelFactComponent);
export { ModidelFactComponent };
//# sourceMappingURL=modidel-fact.component.js.map
