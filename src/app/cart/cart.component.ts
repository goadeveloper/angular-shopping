import { Component, inject } from '@angular/core';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartStateService } from '../shared/data/cart-state.service';
import { ProductItemCart } from '../shared/interfaces/product.interface';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, CurrencyPipe, RouterLink],
  templateUrl: './cart.component.html',
  styles: ``
})
export default class CartComponent {
  state = inject(CartStateService).state

  onRemove(id: number) {
    this.state.remove(id)
  }

  onIncrease(item: ProductItemCart) {
    this.state.update({
      ...item,
      quantity: item.quantity + 1,
    })
  }

  onDecrease(item: ProductItemCart) {
    this.state.update({
      ...item,
      quantity: item.quantity - 1,
    })
  }
}
