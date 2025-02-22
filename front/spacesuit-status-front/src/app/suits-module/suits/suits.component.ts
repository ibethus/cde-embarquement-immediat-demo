import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Suit } from '../model/suit';
import { SpacesuitApi } from '../service/spacesuit-api';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-suits',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatProgressBarModule, MatSortModule, RouterModule],
  templateUrl: './suits.component.html',
  styleUrl: './suits.component.scss',
})
export class SuitsComponent implements OnInit {
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
    });
  }
}
