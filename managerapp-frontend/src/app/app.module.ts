import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { DeleteConfirmationDialogComponent } from './components/confirmationDialogs/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { DeleteConfirmationDialogService } from './components/confirmationDialogs/delete-confirmation-dialog/delete-confirmation-dialog.service';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { ProductSnapComponent } from './components/products/product-snap/product-snap.component';
import { AddEditProductSnapComponent } from './components/products/product-snap/add-edit-product-snap/add-edit-product-snap.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PageNotFoundComponent,
    ProductsComponent,
    DeleteConfirmationDialogComponent,
    AddProductComponent,
    ProductSnapComponent,
    AddEditProductSnapComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [DeleteConfirmationDialogService],
  bootstrap: [AppComponent],
  entryComponents: [
    DeleteConfirmationDialogComponent,
    AddProductComponent,
    AddEditProductSnapComponent
  ],
})
export class AppModule { }
