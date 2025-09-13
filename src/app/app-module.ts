import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { Product } from './product/product';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Home } from './home/home';
import { HttpClientModule } from '@angular/common/http';
import { ProductForm } from './product/product-form/product-form';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Home,          // standalone component
    Product,       // standalone component
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    TooltipModule.forRoot(),
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    FontAwesomeModule,
    HttpClientModule,
    ProductForm
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
