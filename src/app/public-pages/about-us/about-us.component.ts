import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Trigger animation 100px before the element is visible
      once: false,
    });
  }
  ngAfterViewChecked() {
    AOS.refresh(); // Refresh AOS to detect new elements
  }
}
