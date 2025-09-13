import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faPencil } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../Service/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  faPlus = faPlus;
  faPencil = faPencil;
  products: any[] = [];
  constructor(
    private produkService: ProductService
  ){ }
  ngOnInit():void {
    this.produkService.getAll().subscribe({
      next: (data)=> this.products = data,
      error: (err) => console.error('Error loading products', err)
    });
  }

  // products = [
  //   { code: 'P001', name: 'Laptop Pro 14"', category: 'Elektronik', price: 15000000, stock: 12 },
  //   { code: 'P002', name: 'Printer LaserJet X200', category: 'Elektronik', price: 3200000, stock: 8 },
  //   { code: 'P003', name: 'Kursi Kantor Ergonomis', category: 'Furniture', price: 1200000, stock: 25 },
  //   { code: 'P004', name: 'Meja Kerja Kayu', category: 'Furniture', price: 2400000, stock: 14 },
  //   { code: 'P005', name: 'Mouse Wireless', category: 'Aksesoris', price: 250000, stock: 50 }
  // ];
}
