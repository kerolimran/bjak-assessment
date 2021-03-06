import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  carts;
  cartDetails;
  checkoutForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    state: '',
    city: '',
    postcode: '',
    phoneNum: '',
    email: ''
  })
  constructor(private http: HttpService, private formBuilder: FormBuilder) { }
  _getCart(): void {
    this.http.getCartItems().subscribe((data: any) => {
      this.carts = data.data;
      // this.cartDetails = data.data;
      console.log(this.carts);
    });
  }
  _incrementQty(id, quantity): void {
    const payload = {
      productId: id,
      quantity,
    };
    this.http.increaseQty(payload).subscribe(() => {
      this._getCart();
      alert('Product Added');
    });
  }
  _emptyCart(): void {
    this.http.emptyCart().subscribe(() => {
      this._getCart();
      alert('Cart Emptied');
    });
  }
  _checkout(): void {
    const payload = {
      firstName: this.checkoutForm.get('firstName')?.value,
      lastName: this.checkoutForm.get('lastName')?.value,
      address1: this.checkoutForm.get('address1')?.value,
      address2: this.checkoutForm.get('address2')?.value,
      state: this.checkoutForm.get('state')?.value,
      city: this.checkoutForm.get('city')?.value,
      postcode: this.checkoutForm.get('postcode')?.value,
      phoneNum: this.checkoutForm.get('phoneNum')?.value,
      email: this.checkoutForm.get('email')?.value
    }
    this.http.addCustomerDetails(payload).subscribe(() => {
      alert(this.checkoutForm.get('firstName')?.value);
    })

  }
  ngOnInit(): void {
    this._getCart();
  }
}
