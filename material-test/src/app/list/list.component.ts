import {AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {ENTER} from "@angular/cdk/keycodes";
import {ActiveDescendantKeyManager, Highlightable} from "@angular/cdk/a11y";
import {ListItemComponent} from "../list-item/list-item.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewInit {
  users: any[] = [
    {name: 'Luca'},
    {name: 'Matteo'},
    {name: 'Nome'},
  ];
  model: any;
  keyManager: ActiveDescendantKeyManager<ListItemComponent>;
  @ViewChildren(ListItemComponent)
  items: QueryList<Highlightable & ListItemComponent>

  constructor() { }

  ngAfterViewInit(): void {
    this.keyManager = new ActiveDescendantKeyManager(this.items).withWrap()
  }

  onKeydown($event: KeyboardEvent) {
    if($event.keyCode === ENTER){
      this.model = this.keyManager.activeItem?.item.name
    }else{
      this.keyManager.onKeydown($event)
    }
  }
}
