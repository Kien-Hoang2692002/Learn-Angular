import { Component, DoCheck, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ProductItem } from '../shared/types/product-item';
import { ProductItemComponent } from "../shared/product-item/product-item.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgIf,
    ProductItemComponent
],
  templateUrl:  './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  nameBTn = 'Click me!'
  clickMessage = ''

  bindingMessage = ''

  // isActive = true

  isVisible = false

  products: ProductItem[] = [
    {id: 1, name: 'samba og', price: 400000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt2-MqPUfv2VkQ8KkoXVz0fYwjbu_eVq3PSw&s'},
    {id: 2, name: 'nike f1', price: 500000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt2-MqPUfv2VkQ8KkoXVz0fYwjbu_eVq3PSw&s'},
    {id: 3, name: 'addidas f2', price: 600000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt2-MqPUfv2VkQ8KkoXVz0fYwjbu_eVq3PSw&s'},
    {id: 4, name: 'mlb f3', price: 4000000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt2-MqPUfv2VkQ8KkoXVz0fYwjbu_eVq3PSw&s'},
  ]

  constructor() {
    console.log('Initalize Component');
  }


  // Khi template html đã được hiển thị
  ngOnInit(): void {
    console.log('Component initialized');
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
  }

  // ngDoCheck(): void {
  //   console.log("Check component");
  // }


  handleClickMe(): void {
    this.clickMessage = 'Click me hello'
  }

  updateField(): void {
    console.log('Hello');
  }

  handleDelete = (id: number) => {
    // const productIndex = this.products.findIndex(item => item.id === id);
    //   if(productIndex !== -1){
    //     this.products.splice(productIndex, 1);
    //   }
      this.products = this.products.filter(item => item.id !== id); 
    };

  handleChangeVisible = () => {
    this.isVisible = !this.isVisible;
  }

}