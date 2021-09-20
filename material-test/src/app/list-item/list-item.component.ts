import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Highlightable} from "@angular/cdk/a11y";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements Highlightable {
  @Input() item: any;
  _isActive: boolean = false;
  @HostBinding('class.active') get isActive() {
    return this._isActive
  }

  constructor() {
  }

  disabled: boolean;

  setActiveStyles(): void {
    this._isActive = true
  }

  setInactiveStyles(): void {
    this._isActive = false
  }


}
