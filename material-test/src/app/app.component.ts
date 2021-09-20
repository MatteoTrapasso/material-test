import {Component, QueryList, ViewChildren} from '@angular/core';
import {ArrowDivDirective} from "./arrow-div.directive";
import {KeyBoardService} from "./keyboard.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  columns:number=1;
  @ViewChildren(ArrowDivDirective) inputs:QueryList<ArrowDivDirective>

  constructor(private keyboardService:KeyBoardService){}
  ngOnInit()
  {
    this.keyboardService.keyBoard.subscribe((res: { element: any; action: any; })=>{
      this.move(res)
    })
  }
  move(object: { element: any; action: any; })
  {
    const inputToArray=this.inputs.toArray()
    let index=inputToArray.findIndex(x=>x.element==object.element);
    switch (object.action)
    {
      case "UP":
        index-=this.columns;
        break;
      case "DOWN":
        index+=this.columns;
        break;
      case "LEFT":
        index--;
        break;
      case "RIGTH":
        index++;
        break;
    }

    if (index>=0 && index<this.inputs.length)
    {
      inputToArray[index].element.nativeElement.focus();
    }
  }

}
