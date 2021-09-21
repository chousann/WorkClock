import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule, MatCardModule, MatExpansionModule, MatBadgeModule, MatSidenavModule, MatTabsModule, MatSnackBarModule, MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatListModule, MatDialogModule, MatProgressSpinnerModule, MatProgressBarModule, MatMenuModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { DetailComponent } from './detail/detail.component';
import { DakaComponent } from './daka/daka.component';
import { LocalstorageService } from './service/localstorage.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
const appRoutes: Routes = [
  {
    path: '', component: DakaComponent
  },
  {
    path: 'detail', component: DetailComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    DakaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatSnackBarModule,
    MatTabsModule,
    MatSidenavModule,
    MatBadgeModule,
    MatExpansionModule,
    MatRadioModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
  ],
  providers: [LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
