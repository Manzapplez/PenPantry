import { Injectable } from '@angular/core';
import { Product } from './product-list/Product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  /*
    Agregar AL SERVICIO
    una LISTA DE PRODUCTOS
    y function AGREGAR al CARRITO
  
    private _items: Product[] = [];
    private _itemsSubject: BehaviorSubject<Product[]>  new BehaviorSubject(this._items);
    public items: Observable<Product[]> = this._itemSubject.asObservable();
    
    addToCart(product : Product){}
    
    Cuando un objeto observable cambia, emite un evento que otros escuchan
    Agrego un producto a la product-list, cart escucha y actualiza
    Servicio tiene una lista de items observable y desde el carrito me suscribo para tener la info actualizada
  */
}