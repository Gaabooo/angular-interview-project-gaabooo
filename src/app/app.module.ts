import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatChipsModule,
  MatIconModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatRippleModule,
  MatListModule,
  MatSelectModule,
  MatInputModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    FontAwesomeModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatRippleModule,
    MatListModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
