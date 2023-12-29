import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LearnComponent = class LearnComponent {
    constructor(router, packageService) {
        this.router = router;
        this.packageService = packageService;
        this.selectedPackageId = null;
        this.displayText = ''; // This will hold the text to display
        this.learningPackages = [];
    }
    ngOnInit() {
        this.packageService.getAllPackages().subscribe(data => {
            this.learningPackages = data;
        }, error => {
            console.error('Error fetching learning packages:', error);
        });
    }
    navigateHome() {
        this.router.navigate(['/home']);
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