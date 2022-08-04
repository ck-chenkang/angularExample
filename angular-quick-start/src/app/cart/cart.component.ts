import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.carService.getItems();
  checkoutForm = this.formBuilder.group({name:'', address:''});

  constructor(private carService: CartService, private formBuilder:FormBuilder) { }
  // constructor(private carService: CartService) { }

  onSubmit():void{
    this.items = this.carService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
