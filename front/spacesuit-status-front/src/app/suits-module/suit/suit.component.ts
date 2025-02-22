import { CommonModule } from '@angular/common';
import { Component, Input, signal, Signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Observable } from 'rxjs';
import { Suit } from '../model/suit';
import { SpacesuitApi } from '../service/spacesuit-api';
import { toSignal } from '@angular/core/rxjs-interop';
import { SuitStatus } from '../model/suit-status';

@Component({
  selector: 'app-suit',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    MatIconModule,
  ],
  templateUrl: './suit.component.html',
  styleUrls: ['./suit.component.scss'],
})
export class SuitComponent {
  suitService: SpacesuitApi;
OPERATIONNEL: any;
  constructor(suitService: SpacesuitApi) {
    this.suitService = suitService;
  }
  suit!: Signal<Suit>;
  @Input()
  set suitId(suitId: string) {
    this.suitService.getById(suitId).subscribe((suit$) => {
      this.suit = signal(suit$);
    });
  }
}
