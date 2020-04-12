import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { DeleteConfirmationDialogComponent } from './confirmationDialogs/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { DeleteConfirmationDialogService } from './confirmationDialogs/delete-confirmation-dialog/delete-confirmation-dialog.service';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductSnapComponent } from './products/product-snap/product-snap.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PageNotFoundComponent,
    ProductsComponent,
    DeleteConfirmationDialogComponent,
    AddProductComponent,
    ProductSnapComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [DeleteConfirmationDialogService],
  bootstrap: [AppComponent],
  entryComponents: [
    DeleteConfirmationDialogComponent,
    AddProductComponent
  ],
})
export class AppModule { }
