import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { UesrDashBoaredComponent } from './shared/components/uesr-dash-boared/uesr-dash-boared.component';
import { ProductDashBoaredComponent } from './shared/components/product-dash-boared/product-dash-boared.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { UserDetailsComponent } from './shared/components/uesr-dash-boared/user-details/user-details.component';
import { UserFormComponent } from './shared/components/uesr-dash-boared/user-form/user-form.component';
import { ProductDetailsComponent } from './shared/components/product-dash-boared/product-details/product-details.component';
import { ProductFormComponent } from './shared/components/product-dash-boared/product-form/product-form.component';
import { AuthComponent } from './shared/components/auth/auth.component';
import { FairComponent } from './shared/components/fair/fair.component';
import { FariCardComponent } from './shared/components/fair/fari-card/fari-card.component';
import { FairDetailsComponent } from './shared/components/fair/fair-details/fair-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './shared/routing/app.routring.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UesrDashBoaredComponent,
    UesrDashBoaredComponent,
    ProductDashBoaredComponent,
    NavbarComponent,
    PageNotFoundComponent,
    UserDetailsComponent,
    UserFormComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    AuthComponent,
    FairComponent,
    FariCardComponent,
    FairDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
