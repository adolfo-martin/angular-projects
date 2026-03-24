import { Component, inject, signal } from '@angular/core';
import { CategoriesService } from '../categories-service';
import { CommonModule } from '@angular/common';
import { form, required } from '@angular/forms/signals';

interface SignUpForm {
  txtFilter: string;
}

@Component({
  selector: 'panel-categories',
  imports: [CommonModule],
  templateUrl: './panel-categories-component.html',
  styleUrl: './panel-categories-component.css',
})
export class PanelCategoriesComponent {
  protected readonly categories$ = (inject(CategoriesService)).retrieveCategories();

  protected model = signal<SignUpForm>({
    txtFilter: ''
  });

  protected form = form(this.model, s => {
    required(s.txtFilter, {message: 'es obligatorio'});
  });
}
