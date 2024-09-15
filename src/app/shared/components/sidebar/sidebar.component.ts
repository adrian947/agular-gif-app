import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private readonly gifsService: GifsService) {}

  get Tags() {
    return this.gifsService.tagsHistory;
  }
  getTagSaved(item: string){
    this.gifsService.searchTag(item)
  }
}
