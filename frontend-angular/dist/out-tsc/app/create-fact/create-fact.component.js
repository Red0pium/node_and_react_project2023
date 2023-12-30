import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CreateFactComponent = class CreateFactComponent {
    constructor(router, factService, packageService) {
        this.router = router;
        this.factService = factService;
        this.packageService = packageService;
        this.selectedPackageId = null;
        this.enteredQuestion = '';
        this.enteredAnswer = '';
        this.learningFacts = [];
        this.learningPackages = [];
        this.parseInt = parseInt;
    }
    ngOnInit() {
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
        if (this.selectedPackageId === null) {
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
                alert("Fact created");
                // Handle any additional logic after successful update
                this.navigateTo('home');
            }, error => {
                console.error('Error creating the fact:', error);
            });
        }
        else {
            this.navigateTo('create-fact');
        }
    }
    navigateTo(destination) {
        this.router.navigate([`/${destination}`]);
    }
};
CreateFactComponent = __decorate([
    Component({
        selector: 'app-create-fact',
        templateUrl: './create-fact.component.html',
        styleUrl: './create-fact.component.css'
    })
], CreateFactComponent);
export { CreateFactComponent };
//# sourceMappingURL=create-fact.component.js.map