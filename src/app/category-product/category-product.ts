import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { first } from 'rxjs/operators';
import { CategoryProductService } from '../Service/category-product.service';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category-product.html',
  styleUrl: './category-product.css'
})
export class CategoryProduct {
  faPlus = faPlus;
  faPencil = faPencil;
  fatrash = faTrash;
  categories: any[] = [];
  router: any;
  constructor(private categoryService: CategoryProductService,
    private cdr: ChangeDetectorRef // biar ke load
  ) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(data => {
      this.categories = data;
      this.cdr.detectChanges(); // biar ke load productnya
      console.log(this.categories);
    });
  }

  deleteData(id: string): void {
    if (confirm('Are you sure to DELETE THIS DATA?')) {
      this.categoryService.deleteData(id).pipe(first()).subscribe({
        next: () => {
          alert('Data Deleted Successfully.');
          this.router.navigate(['/category-products'])
        },
        error: err => {
          if (err.status === 204) {
            alert('Data Deleted Successfully.');
            this.ngOnInit();
          } else {
            alert('Error: ha ha..');
            console.error('Error details:', err);
          }
        }
      })
    }
  }

}