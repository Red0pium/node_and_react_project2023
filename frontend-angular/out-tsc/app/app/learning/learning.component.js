import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LearningComponent = class LearningComponent {
    constructor(router, route, packageService) {
        this.router = router;
        this.route = route;
        this.packageService = packageService;
        this.allFactsAnswered = false;
        this.selectedPackage = null;
        this.selectedPackageId = null;
        this.learningFacts = [];
        this.currentFactIndex = 0;
        this.showAnswer = false;
        this.currentFact = null;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.selectedPackageId = Number(params.get('selectedPackageId')); // Make sure 'packageID' matches your route configuration
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
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array;
    }
    onClick() {
        if (this.showAnswer) {
            // Move to the next fact
            this.currentFactIndex++;
            if (this.currentFactIndex < this.learningFacts.length) {
                this.currentFact = this.learningFacts[this.currentFactIndex];
            }
            else {
                this.navigateTo("home");
            }
        }
        else {
            if (this.currentFactIndex === this.learningFacts.length - 1) {
                this.allFactsAnswered = true;
                console.log('No more facts to learn.');
            }
        }
        // Toggle the showAnswer flag
        this.showAnswer = !this.showAnswer;
    }
    navigateTo(destination) {
        this.router.navigate([`/${destination}`]);
    }
};
LearningComponent = __decorate([
    Component({
        selector: 'app-learning',
        templateUrl: './learning.component.html',
        styleUrls: ['./learning.component.css']
    })
], LearningComponent);
export { LearningComponent };
//# sourceMappingURL=learning.component.js.map