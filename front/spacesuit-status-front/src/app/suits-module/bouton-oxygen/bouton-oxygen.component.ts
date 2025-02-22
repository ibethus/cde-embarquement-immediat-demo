import { Component, computed, Input, Signal } from '@angular/core';
import { Suit } from '../model/suit';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { OpenDialogBoutonComponent } from '../../open-dialog-bouton/open-dialog-bouton.component';

@Component({
  selector: 'app-bouton-oxygen',
  imports: [MatIcon, MatButton, MatTooltip],
  templateUrl: './bouton-oxygen.component.html',
  styleUrl: './bouton-oxygen.component.less',
})
export class BoutonOxygenComponent extends OpenDialogBoutonComponent{
  override actionMessage: string = `Recharger en oxygène`;
  @Input() suit!: Signal<Suit>;

  maxOxygen: Signal<Boolean> = computed(() => this.suit().oxygenLevel === 100);
  oxygenPrice: Signal<Number> = computed(
    () => (100 - this.suit().oxygenLevel) * 0.12
  );
  tooltipOxygen: Signal<string> = computed(() =>
    this.maxOxygen()
      ? "La résèrve d'oxygène est pleine"
      : `Recharger en oxygène (${this.oxygenPrice()} €)`
  );
}
