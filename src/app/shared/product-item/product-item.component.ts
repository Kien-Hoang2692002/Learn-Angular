import { NgFor, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '../pipes/CurrencyPipe.pipe';
import { UpperCasePipe } from '../pipes/UpperCasePipe.pipe';
import { ProductItem } from '../types/product-item';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    RouterLink,
    CurrencyPipe, 
    UpperCasePipe,
    NgFor,
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnChanges, OnDestroy {

  @Input() products: ProductItem[] = [];

  @Output() dataEvent = new EventEmitter<number>();

  get totalPrice(): number {
    const sum = this.products.reduce((total, item) => {
      return total + item.price;
    }, 0);

    return sum;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['products'].currentValue);
    console.log(changes['products'].previousValue);
  }

  ngOnDestroy(): void {
    console.log('Component destroyed');
    
  }

  handleDelete = (id: number) => {
    this.dataEvent.emit(id);
  }

}
