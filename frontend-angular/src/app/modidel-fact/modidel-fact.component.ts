import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-modidel-fact',
  templateUrl: './modidel-fact.component.html',
  styleUrl: './modidel-fact.component.css'
})
export class ModidelFactComponent {
  constructor(private router: Router) {
  }

  navigateTo(destination: string) {
    this.router.navigate([`/${destination}`]);
  }

  confirmDelete() {
    const userConfirmed = confirm("Are you sure you want to delete this fact ?");
    if (userConfirmed) {
      this.navigateTo('home');
    } else {
      this.navigateTo('modidel-fact');}
  }
}
