import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Iproducts[] = [
    { id: 1, name: 'O Quarto de despejo', price: 50.0, description: 'Um livro necessário ', image: '../despejo.png' },
    { id: 1, name: 'Olhos dágua', price: 80.0, description: 'Um livro dramático', image: '../dagua.png' },
    { id: 1, name: 'Casa Velha', price: 58.0, description: 'Um livro histórico', image: '../velha.png' },
    { id: 1, name: 'O Quarto de despejo', price: 50.0, description: 'Um livro necessário ', image: '../despejo.png' },
    { id: 1, name: 'Olhos dágua', price: 80.0, description: 'Um livro dramático', image: '../dagua.png' },
    { id: 1, name: 'Casa Velha', price: 58.0, description: 'Um livro histórico', image: '../velha.png' },
    { id: 1, name: 'O Quarto de despejo', price: 50.0, description: 'Um livro necessário ', image: '../despejo.png' },
    { id: 1, name: 'Olhos dágua', price: 80.0, description: 'Um livro dramático', image: '../dagua.png' },
    { id: 1, name: 'Casa Velha', price: 58.0, description: 'Um livro histórico', image: '../velha.png' },
    { id: 1, name: 'O Quarto de despejo', price: 50.0, description: 'Um livro necessário ', image: '../despejo.png' },
    { id: 1, name: 'Olhos dágua', price: 80.0, description: 'Um livro dramático', image: '../dagua.png' },
    { id: 1, name: 'Casa Velha', price: 58.0, description: 'Um livro histórico', image: '../velha.png' },
    { id: 1, name: 'O Quarto de despejo', price: 50.0, description: 'Um livro necessário ', image: '../despejo.png' },
    { id: 1, name: 'Olhos dágua', price: 80.0, description: 'Um livro dramático', image: '../dagua.png' },
    { id: 1, name: 'Casa Velha', price: 58.0, description: 'Um livro histórico', image: '../velha.png' },
  ];
  getProducts(): Iproducts[] {
    return this.products;
  }
}

