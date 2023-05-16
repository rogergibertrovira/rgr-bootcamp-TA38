import { Component, OnInit, Input } from '@angular/core';

import { CharacterDetailService } from '../character-detail.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css'],
})
export class CharacterCardComponent {
  @Input() character: any;

  name = '';
  image = '';

  constructor(private characterDetailService: CharacterDetailService) {}

  ngOnInit(): void {
    this.name = this.character.name;
    this.image = this.character.image;
  }
}
