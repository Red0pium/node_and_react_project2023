import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrl: './create-package.component.css'
})
export class CreatePackageComponent {
  constructor(private router: Router) {
  }

  navigateTo(destination: string) {
    this.router.navigate([`/${destination}`]);
  }
}
