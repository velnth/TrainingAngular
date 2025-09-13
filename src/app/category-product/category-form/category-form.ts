import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { CategoryProductService } from '../../Service/category-product.service';


@Component({
  selector: 'app-category-form',
  standalone: false,
  templateUrl: './category-form.html',
  styleUrl: './category-form.css'
})
export class CategoryForm {
  loading = false;
  submitted = false;
  form!: FormGroup;
  id!: string;
  isAddMode!: boolean;
  constructor(
    private CategoryService: CategoryProductService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.form = this.formBuilder.group({
      CATEGORY_CODE: ['',],
      CATEGORY_NAME: ['', [Validators.required]],
    })

    if (!this.isAddMode) {
      this.CategoryService.getById(this.id)
        .pipe(first())
        .subscribe(x => {
          console.log(x);
          this.form.patchValue(x);
        })
    }
  }

  get f() { return this.form.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;

    if (this.isAddMode) {
      this.createData();
    } else {
      this.updateData();
    }
  }

  private createData(): void {
    this.CategoryService.createData(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          alert('Data Created Successfully.');
          this.router.navigate(['/category']);
        },
        error: err => {
          alert('Error: ' + err);
          console.log(err);
          this.loading = false;
        }
      });
  }

  private updateData(): void {
    this.CategoryService.updateData(this.id, this.form.value)
      .pipe(first()).subscribe({
        next: () => {
          alert('Data Updated Successfully.');
          this.router.navigate(['/category'])
        },
        error: err => {
          alert('Error: ' + err);
          console.log(err);
          this.loading = false;
        }
      });
  }
}