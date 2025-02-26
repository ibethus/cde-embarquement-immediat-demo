import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {
  MatProgressSpinner
} from '@angular/material/progress-spinner';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { Suit } from '../model/suit';
import { SpacesuitApi } from '../service/spacesuit-api';

@Component({
  selector: 'app-suits',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatProgressBarModule,
    MatSortModule,
    RouterModule,
    MatProgressSpinner,
  ],
  templateUrl: './suits.component.html',
  styleUrl: './suits.component.scss',
})
export class SuitsComponent implements OnInit {
  loading: WritableSignal<boolean> = signal(true);
  @ViewChild(MatSort) sort!: MatSort;
  suits = new MatTableDataSource<Suit>();
  displayedColumns: string[] = [
    'serialNumber',
    'status',
    'batteryLevel',
    'oxygenLevel',
    'temperature',
  ];

  constructor(private suitService: SpacesuitApi) {
    // Définition de la logique de tri personnalisée
    this.suits.sortingDataAccessor = (
      suit: Suit,
      property: string
    ): string | number => {
      switch (property) {
        case 'temperature':
          return suit.temperatureRange.min; // Tri basé uniquement sur la température minimale
        default:
          return suit[
            property as keyof Pick<
              Suit,
              'serialNumber' | 'status' | 'batteryLevel' | 'oxygenLevel'
            >
          ];
      }
    };
  }

  ngOnInit(): void {
    this.suitService.getAll().subscribe((data) => {
      this.suits.data = data;
      this.suits.sort = this.sort;
      this.loading.set(false);
    });
  }
}
