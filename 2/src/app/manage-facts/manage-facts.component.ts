import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-manage-facts',
  templateUrl: './manage-facts.component.html',
  styleUrl: './manage-facts.component.css'
})
export class ManageFactsComponent {
  constructor(private router: Router) {}
  navigateTo(destination: string) {
    this.router.navigate([`/${destination}`]);}

}
