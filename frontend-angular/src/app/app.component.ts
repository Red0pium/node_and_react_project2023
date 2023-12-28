import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-angular';
  constructor(private router : Router) {}

  navigateTo(destination: string) {
    this.router.navigate([`/${destination}`]);}

}

