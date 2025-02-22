import { CommonModule } from '@angular/common';
import { Component, Input, Signal } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatProgressBar } from '@angular/material/progress-bar';
import { Suit } from '../../suits-module/model/suit';

@Component({
  selector: 'app-suit-recap',
  imports: [MatDivider, MatIcon, MatProgressBar, CommonModule],
  templateUrl: './suit-recap.component.html',
  styleUrl: './suit-recap.component.scss',
})
export class SuitRecapComponent {
  @Input() suit!: Signal<Suit>;
}
