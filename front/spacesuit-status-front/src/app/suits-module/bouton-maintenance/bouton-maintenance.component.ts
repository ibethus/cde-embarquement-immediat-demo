import { Component, computed, Input, Signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { Suit } from '../model/suit';
import { SuitStatus } from '../model/suit-status';

@Component({
  selector: 'app-bouton-maintenance',
  imports: [MatIcon, MatButton, MatTooltip],
  templateUrl: './bouton-maintenance.component.html',
  styleUrl: './bouton-maintenance.component.less',
})
export class BoutonMaintenanceComponent {
  @Input() suit!: Signal<Suit>;
  horsService: Signal<Boolean> = computed(
    () => this.suit().status === SuitStatus.HORS_SERVICE
  );
  operationnel: Signal<Boolean> = computed(
    () => this.suit().status === SuitStatus.OPERATIONNEL
  );
  tooltipMaintenance: Signal<string> = computed(() => {
    switch (this.suit().status) {
      case SuitStatus.OPERATIONNEL:
        return 'La combinaison est déjà opérationnelle';
      case SuitStatus.EN_MAINTENANCE:
        return 'La combinaison est déjà en maintenance';
      case SuitStatus.HORS_SERVICE:
        return 'Envoyer la combinaison en révision';
    }
  });
}
