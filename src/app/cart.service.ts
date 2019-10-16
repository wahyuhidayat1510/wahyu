import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data = [
    {
      category: 'Honor Band',
      expanded: true,
      products: [
        { id: 0, name: 'Honor Band 5', price: '150', imageUrl : '/assets/img/h.jpg' },
      ]
    },
    {
      category: 'Xiaomi Band',
      products: [
        { id: 1, name: 'Mi Band 3', price: '158', imageUrl : '/assets/img/m3.jpg'},
        { id: 2, name: 'Mi Band 4', price: '160', imageUrl : '/assets/img/m4.jpg'},
      ]
    },
	{
      category: 'Samsung Band',
      products: [
        { id: 3, name: 'Samsung Gear Fit2 Pro', price: '100', imageUrl : '/assets/img/s.jpg'},
      ]
    }
  ];
 
  private cart = [];
 
  constructor() { }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }
}