import { Component } from '@angular/core';
import { CharacterDetailService } from '../character-detail.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent {
  character: any = null;

  image = '';
  name = '';
  status = '';
  species = '';
  gender = '';
  origin = '';
  location = '';

  constructor(private characterDetailService: CharacterDetailService) {}

  ngOnInit() {
    this.characterDetailService
      .returnCharacter(1)
      .subscribe((result) => (this.character = result));
  }
}
