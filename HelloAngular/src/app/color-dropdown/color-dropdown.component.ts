import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'in-color-dropdown',
  templateUrl: './color-dropdown.component.html',
  styleUrls: ['./color-dropdown.component.scss']
})
export class ColorDropdownComponent implements OnInit {

  @Input()
  color = 'Rouge';

  @Input()
  colors = ['Rouge', 'Vert', 'Bleu'];

  @Output()
  colorChange = new EventEmitter<string>();

  /*
  colorsMap = {
    red: 'Rouge',
    green: 'Vert',
    blue: 'Bleu',
  };

  colorsKey = Object.keys(this.colorsMap);
  */

  constructor() { }

  ngOnInit() {
  }

  onColorChange(color: string) {
    this.colorChange.emit(color);
  }


}
