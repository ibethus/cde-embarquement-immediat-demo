import { CommonModule } from '@angular/common';
import { Component, Input, signal, WritableSignal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BoutonBatterieComponent } from '../bouton-batterie/bouton-batterie.component';
import { BoutonMaintenanceComponent } from '../bouton-maintenance/bouton-maintenance.component';
import { BoutonMissionComponent } from '../bouton-mission/bouton-mission.component';
import { BoutonOxygenComponent } from '../bouton-oxygen/bouton-oxygen.component';
import { Suit } from '../model/suit';
import { SuitStatus } from '../model/suit-status';
import { SpacesuitApi } from '../service/spacesuit-api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suit',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    MatIconModule,
    BoutonOxygenComponent,
    BoutonBatterieComponent,
    BoutonMissionComponent,
    BoutonMaintenanceComponent,
  ],
  templateUrl: './suit.component.html',
  styleUrls: ['./suit.component.scss'],
})
export class SuitComponent {
  constructor(suitService: SpacesuitApi, router: Router) {
    this.suitService = suitService;
    this.router = router;
  }
  router: Router;
  suitService: SpacesuitApi;
  suit!: WritableSignal<Suit>;
  @Input()
  set suitId(suitId: string) {
    this.suitService.getById(suitId).subscribe((suit$) => {
      this.suit = signal(suit$);
    });
  }

  validateMaintenance($event: boolean) {
    if ($event) {
      let updatedSuit: Suit = { ...this.suit() };
      updatedSuit.status = SuitStatus.EN_MAINTENANCE;
      updatedSuit.lastMaintenanceDate = new Date();
      const nextYear = new Date();
      nextYear.setMonth(new Date().getMonth() + 12);
      updatedSuit.nextMaintenanceDate = nextYear;
      this.suitService.update(updatedSuit.id, updatedSuit).subscribe({
        next: (_) => this.suit.set(updatedSuit),
        error: (error) => console.error(error),
      });
    }
  }
  validateBatteryRefill($event: boolean) {
    if ($event) {
      let updatedSuit: Suit = { ...this.suit() };
      updatedSuit.batteryLevel = 100;
      this.suitService.update(updatedSuit.id, updatedSuit).subscribe({
        next: (_) => this.suit.set(updatedSuit),
        error: (error) => console.error(error),
      });
    }
  }
  validateOxygenRefill($event: boolean) {
    if ($event) {
      let updatedSuit: Suit = { ...this.suit() };
      updatedSuit.oxygenLevel = 100;
      this.suitService.update(updatedSuit.id, updatedSuit).subscribe({
        next: (_) => this.suit.set(updatedSuit),
        error: (error) => console.error(error),
      });
    }
  }
  validateMission($event: boolean) {
    if ($event) {
      this.router.navigate(['/mission/', this.suit().id]);
    }
  }
}
