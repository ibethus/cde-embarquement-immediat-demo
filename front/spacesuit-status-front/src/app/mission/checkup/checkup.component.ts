import { Component, Input, signal, Signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Suit } from '../../suits-module/model/suit';
import { SpacesuitApi } from '../../suits-module/service/spacesuit-api';
import { MissionComponent } from '../mission.component';
import { SuitRecapComponent } from '../suit-recap/suit-recap.component';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-checkup',
  imports: [MissionComponent, MatSidenavModule, SuitRecapComponent, MatDivider],
  templateUrl: './checkup.component.html',
  styleUrl: './checkup.component.less',
})
export class CheckupComponent {
  suitService: SpacesuitApi;
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
  missionAmount: number[] = [
    ...Array(Math.floor(Math.random() * 9) + 1).keys(),
  ];
}
