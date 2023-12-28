import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-manage-packages',
  templateUrl: './manage-packages.component.html',
  styleUrl: './manage-packages.component.css'
})
export class ManagePackagesComponent {
  constructor(private router: Router) {}
  navigateTo(destination: string) {
    this.router.navigate([`/${destination}`]);}
}
