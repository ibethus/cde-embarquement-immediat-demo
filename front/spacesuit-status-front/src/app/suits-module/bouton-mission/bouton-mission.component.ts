import { Component, computed, Input, Signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { Suit } from '../model/suit';
import { SuitStatus } from '../model/suit-status';
import { OpenDialogBoutonComponent } from '../../open-dialog-bouton/open-dialog-bouton.component';

@Component({
  selector: 'app-bouton-mission',
  imports: [MatIcon, MatButton, MatTooltip],
  templateUrl: './bouton-mission.component.html',
  styleUrl: './bouton-mission.component.less',
})
export class BoutonMissionComponent extends OpenDialogBoutonComponent {
  override actionMessage: string = 'Envoyer la combinaison en mission';
  @Input() suit!: Signal<Suit>;
  horsService: Signal<Boolean> = computed(
    () => this.suit().status === SuitStatus.HORS_SERVICE
  );
  operationnel: Signal<Boolean> = computed(
    () => this.suit().status === SuitStatus.OPERATIONNEL
  );
  tooltipMission: Signal<string> = computed(() =>
    this.operationnel()
      ? this.actionMessage
      : "La combinaison n'est pas opérationnelle"
  );
}
