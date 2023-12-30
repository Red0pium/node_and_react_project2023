import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LearnComponent = class LearnComponent {
    constructor(router, packageService) {
        this.router = router;
        this.packageService = packageService;
        this.selectedPackageId = null;
        this.selectedPackage = null; // Property to hold the selected package details
        this.learningPackages = [];
        this.learningFacts = [];
    }
    ngOnInit() {
        this.packageService.getAllPackages().subscribe(data => {
            this.learningPackages = data;
        }, error => {
            console.error('Error fetching learning packages:', error);
        });
    }
    onPackageChange() {
        this.selectedPackage = this.learningPackages.find(pkg => pkg.LearningPackageID === Number(this.selectedPackageId)) || null;
        this.packageService.getPackageFacts(Number(this.selectedPackageId)).subscribe(data => {
            this.learningFacts = data;
        }, error => {
            console.error('Error fetching learning facts:', error);
        });
    }
    navigateLearn(id) {
        if (id !== null) {
            if (this.learningFacts.length > 0) {
                this.router.navigate([`/learn/${id}`]);
            }
            else {
                alert("No fact in this package");
            }
        }
        else {
            alert("Invalid package selected");
        }
    }
};
LearnComponent = __decorate([
    Component({
        selector: 'app-learn',
        templateUrl: './learn.component.html',
        styleUrls: ['./learn.component.css']
    })
], LearnComponent);
export { LearnComponent };
//# sourceMappingURL=learn.component.js.map