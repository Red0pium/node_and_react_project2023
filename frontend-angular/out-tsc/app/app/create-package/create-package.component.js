import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CreatePackageComponent = class CreatePackageComponent {
    constructor(router, packageService) {
        this.router = router;
        this.packageService = packageService;
        this.enteredTitle = '';
        this.enteredDescription = '';
        this.enteredCategory = '';
        this.selectedTargetAudience = '';
        this.selectedLevel = '';
        this.learningPackages = [];
        this.parseInt = parseInt;
    }
    ngOnInit() {
        this.packageService.getAllPackages().subscribe(data => {
            this.learningPackages = data;
        }, error => {
            console.error('Error fetching learning packages:', error);
        });
    }
    createPackage() {
        if (this.enteredTitle === '') {
            alert('No name entered');
            return;
        }
        if (this.enteredCategory === '') {
            alert('No category entered');
            return;
        }
        if (this.selectedTargetAudience === '') {
            alert('No target audience selected');
            return;
        }
        if (this.selectedLevel === '') {
            alert('No difficulty level selected');
            return;
        }
        const userConfirmed = confirm('Are you sure you want to create the package ?');
        if (userConfirmed) {
            const packageData = {
                Title: this.enteredTitle,
                Description: this.enteredDescription,
                Category: this.enteredCategory,
                TargetAudience: this.selectedTargetAudience,
                DifficultyLevel: this.selectedLevel
            };
            this.packageService.createPackage(packageData).subscribe(response => {
                console.log('Package created successfully:', response);
                alert("Package created");
                this.navigateTo('home');
            }, error => {
                console.error('Error creating the package:', error);
            });
        }
        else {
            this.navigateTo('create-package');
        }
    }
    navigateTo(destination) {
        this.router.navigate([`/${destination}`]);
    }
};
CreatePackageComponent = __decorate([
    Component({
        selector: 'app-create-package',
        templateUrl: './create-package.component.html',
        styleUrl: './create-package.component.css'
    })
], CreatePackageComponent);
export { CreatePackageComponent };
//# sourceMappingURL=create-package.component.js.map