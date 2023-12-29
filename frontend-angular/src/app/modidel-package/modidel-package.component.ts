import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-modidel-package',
  templateUrl: './modidel-package.component.html',
  styleUrl: './modidel-package.component.css'
})
export class ModidelPackageComponent {
  constructor(private router: Router) {
  }

  navigateTo(destination: string) {
    this.router.navigate([`/${destination}`]);
  }

  confirmDelete() {
    const userConfirmed = confirm("Are you sure you want to delete this package ?");
    if (userConfirmed) {
      this.navigateTo('home');
    } else {
      this.navigateTo('modidel-package');}
  }
}



