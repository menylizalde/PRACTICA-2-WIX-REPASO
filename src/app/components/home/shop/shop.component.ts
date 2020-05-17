import { Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  public mostrar: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  public MostrarDiv() {
    this.mostrar = true;
  }
  quitarDiv() {
    this.mostrar = false;
  }
  
  obtenerNewProduct(){
    
  }
}
