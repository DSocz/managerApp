import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { DeleteConfirmationDialogComponent } from './confirmationDialogs/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { DeleteConfirmationDialogService } from './confirmationDialogs/delete-confirmation-dialog/delete-confirmation-dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PageNotFoundComponent,
    ProductsComponent,
    DeleteConfirmationDialogComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [DeleteConfirmationDialogService],
  bootstrap: [AppComponent],
  entryComponents: [DeleteConfirmationDialogComponent],
})
export class AppModule { }
