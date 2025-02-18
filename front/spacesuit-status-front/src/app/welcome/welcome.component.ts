import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [MatIcon, RouterLink, RouterLinkActive],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.less',
})
export class WelcomeComponent {}
