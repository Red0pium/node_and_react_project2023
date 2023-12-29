import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-fact',
  templateUrl: './create-fact.component.html',
  styleUrl: './create-fact.component.css'
})
export class CreateFactComponent {
  constructor(private router: Router) {
  }

  navigateTo(destination: string) {
    this.router.navigate([`/${destination}`]);
  }

}
