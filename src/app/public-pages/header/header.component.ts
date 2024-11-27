import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BreakpointObserver } from '@angular/cdk/layout';
@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;

  constructor(private breakpointObserver: BreakpointObserver) {
    // Listen for changes in the viewport size
    this.breakpointObserver
      .observe(['(min-width: 961px)'])
      .subscribe((result) => {
        if (result.matches && this.menuTrigger) {
          // Close the menu if screen size exceeds 960px
          this.menuTrigger.closeMenu();
        }
      });
  }
}
