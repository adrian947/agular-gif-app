import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gitsResponse.interface';

@Component({
  selector: 'card-gif',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input()
  public gif!: Gif;


  ngOnInit(): void {
    if(!this.gif) throw new Error('Error with gif');
  }
}
