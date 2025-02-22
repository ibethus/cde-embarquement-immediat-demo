import { Component, Input, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-mission',
  imports: [],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.less',
})
export class MissionComponent implements OnInit {
  ngOnInit(): void {
    this.missionName = faker.hacker.phrase();
    let adjective = faker.lorem.word();
    const planet =
      String(adjective).charAt(0).toUpperCase() + String(adjective).slice(1);
    this.planetName = `${planet} ${faker.string
      .alpha(1)
      .toUpperCase()}${faker.number.int(3)}`;
  }
  @Input() planetId!: number;
  missionName!: string;
  planetName!: string;
  imgSource(): string {
    return '/planet' + this.planetId + '.svg';
  }
}
