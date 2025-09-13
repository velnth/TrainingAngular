import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { SamplePage } from './SamplePage/samplepage/samplepage';
import { Product } from './product/product';
import { Home } from './home/home';
import { ProductForm } from './product/product-form/product-form';


const routes: Routes = [
  // { path: 'sample-page', component: SamplePage },
  { path: 'products', component: Product },
  { path: '', component: Home},
  { path: 'products/form', component: ProductForm},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
