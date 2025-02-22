import { Component, computed, Input, Signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { Suit } from '../model/suit';
import { SuitStatus } from '../model/suit-status';

@Component({
  selector: 'app-bouton-mission',
  imports: [MatIcon, MatButton, MatTooltip],
  templateUrl: './bouton-mission.component.html',
  styleUrl: './bouton-mission.component.less',
})
export class BoutonMissionComponent {
  @Input() suit!: Signal<Suit>;
  horsService: Signal<Boolean> = computed(
    () => this.suit().status === SuitStatus.HORS_SERVICE
  );
  operationnel: Signal<Boolean> = computed(
    () => this.suit().status === SuitStatus.OPERATIONNEL
  );
  tooltipMission: Signal<string> = computed(() =>
    this.operationnel()
      ? 'Envoyer la combinaison en mission'
      : "La combinaison n'est pas opérationnelle"
  );
}
