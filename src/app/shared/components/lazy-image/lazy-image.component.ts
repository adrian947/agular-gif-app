import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'share-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css',
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;
  @Input()
  public alt!: string;

  public hasLoader: boolean = false

  ngOnInit(): void {
    if (!this.url || !this.alt) throw new Error('url or alt not provider');
  }

  onLoader(){
    this.hasLoader = true;
  }
}
