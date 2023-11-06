import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splashscreen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './splashscreen.component.html',
  styleUrls: ['./splashscreen.component.css']
})
export class SplashscreenComponent {
  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['']);
    }, 5000);  // Navigate away after 5 seconds.
  }
  
  audio = new Audio('assets/arcade-coin.wav');

  onLinkClick() {
    this.audio.play();
  }
}
