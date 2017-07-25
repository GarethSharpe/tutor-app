import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
  MdButtonModule, 
  MdCheckboxModule, 
  MdToolbarModule,
  MdMenuModule,
  MdSidenavModule,
  MdIconModule,
  MdCardModule,
  MdSnackBarModule,
  MdGridListModule
} from '@angular/material'

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BannerComponent } from './banner/banner.component';
import { CardsComponent } from './cards/cards.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BannerComponent,
    CardsComponent,
    SnackBarComponent,
    BodyComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdMenuModule,
    MdSidenavModule,
    MdIconModule,
    MdCardModule,
    MdSnackBarModule,
    MdGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
