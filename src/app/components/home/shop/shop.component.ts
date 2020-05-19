import { Component, OnInit, ViewChild } from '@angular/core';
import { from } from 'rxjs';
import { take, tap, map } from 'rxjs/operators';
import { ProductsInterface } from '../../../interface/ecommerse.interfaces';
import { products } from './../../../data/data';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  public mostrar: boolean = false;
  public ShopProducts: Array<ProductsInterface> = [];
  constructor() {
    this.obtenerNewProduct();
  }

  ngOnInit(): void {}

  public MostrarDiv() {
    this.mostrar = true;
  }
  quitarDiv() {
    this.mostrar = false;
  }

  obtenerNewProduct() {
    from(products)
      .pipe(
        map((producto) => {
          let DireccionImg = `../../../../assets/${producto.img}`;

          return {
            ...producto,
            img: DireccionImg,
          };
        }),
        take(3),
        tap((value) => this.ShopProducts.push(value))
      )
      .subscribe((value) => console.log(this.ShopProducts));
  }
}
