import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CustomAngularAccordionTableComponent } from './custom-angular-accordion-table/custom-angular-accordion-table.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatIconModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    CustomAngularAccordionTableComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
