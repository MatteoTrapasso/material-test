import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {A11yModule} from "@angular/cdk/a11y";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {ArrowDivDirective} from "./arrow-div.directive";
import {ZippyBasicComponent} from "./test/zippy-basic.component";
import { ListItemComponent } from './list-item/list-item.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrowDivDirective,
    ZippyBasicComponent,
    ListItemComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    A11yModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
