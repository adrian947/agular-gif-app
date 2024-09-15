import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private readonly gifsService: GifsService) {}

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    if (!newTag) return;

    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
