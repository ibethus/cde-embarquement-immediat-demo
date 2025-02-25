import { Component, Input, Signal } from '@angular/core';
import { Suit } from '../model/suit';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-suit-viewer',
  imports: [CommonModule],
  templateUrl: './suit-viewer.component.html',
  styleUrl: './suit-viewer.component.scss',
})
export class SuitViewerComponent {
  @Input() suit!: Signal<Suit>;
}
