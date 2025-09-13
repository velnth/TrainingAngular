import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleHalaman } from './sample-halaman/sample-halaman';
import { Product } from './product/product';
import { Home } from './home/home';
import { ProductForm } from './product/product-form/product-form';
import { CategoryForm } from './category-product/category-form/category-form';
import { CategoryProduct } from './category-product/category-product';


const routes: Routes = [
  { path: '', component: Home },
  { path: 'sample-halaman', component: SampleHalaman },
  { path: 'products', component: Product },
  { path: 'product/form', component: ProductForm },
  { path: 'product/form/:id', component: ProductForm },
  { path: 'category-products', component: CategoryProduct },
  { path: 'category/form', component: CategoryForm },
  { path: 'category/form/:id', component: CategoryForm },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }