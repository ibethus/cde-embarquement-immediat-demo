import { Component, computed, Input, Signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { Suit } from '../model/suit';
import { OpenDialogBoutonComponent } from '../../open-dialog-bouton/open-dialog-bouton.component';

@Component({
  selector: 'app-bouton-batterie',
  imports: [MatIcon, MatButton, MatTooltip],
  templateUrl: './bouton-batterie.component.html',
  styleUrl: './bouton-batterie.component.less',
})
export class BoutonBatterieComponent extends OpenDialogBoutonComponent {
  override actionMessage: string = "Remplacer par une batterie pleine (20€)";
  @Input() suit!: Signal<Suit>;

  maxBattery: Signal<Boolean> = computed(
    () => this.suit().batteryLevel === 100
  );

  tooltipBattery: Signal<string> = computed(() =>
    this.maxBattery()
      ? 'La batterie est déjà chargée'
      : this.actionMessage
  );
}
