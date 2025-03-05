import { Component, computed, input, Input, Signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { OpenDialogBoutonComponent } from '../../open-dialog-bouton/open-dialog-bouton.component';
import { Suit } from '../model/suit';
import { SuitStatus } from '../model/suit-status';

@Component({
  selector: 'app-bouton-maintenance',
  imports: [MatIcon, MatButton, MatTooltip],
  templateUrl: './bouton-maintenance.component.html',
  styleUrl: './bouton-maintenance.component.less',
})
export class BoutonMaintenanceComponent extends OpenDialogBoutonComponent {
  suit = input.required<Suit>();
  override actionMessage = 'Envoyer la combinaison en révision';

  horsService: Signal<Boolean> = computed(
    () => this.suit().status === SuitStatus.HORS_SERVICE
    || this.suit()?.nextMaintenanceDate < new Date()
  );
  operationnel: Signal<Boolean> = computed(
    () => this.suit().status === SuitStatus.OPERATIONNEL
  );
  tooltipMaintenance: Signal<string> = computed(() => {
    if (this.suit()?.nextMaintenanceDate < new Date()){
      return "La date de révision est dépassée !";
    }
    switch (this.suit().status) {
      case SuitStatus.OPERATIONNEL:
        return 'La combinaison est déjà opérationnelle';
      case SuitStatus.EN_MAINTENANCE:
        return 'La combinaison est déjà en maintenance';
      case SuitStatus.EN_MISSION:
        return 'La combinaison est en mission';
      case SuitStatus.HORS_SERVICE:
        return this.actionMessage;
    }
  });
}
