import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ProductItem } from '../shared/types/product-item';
import { ProductItemComponent } from "../shared/product-item/product-item.component";
import { BlogService } from '../../services/BlogService';
import { Subscription } from 'rxjs';
import { map} from 'rxjs/operators';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgIf,
    ProductItemComponent,
],
  templateUrl:  './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  nameBTn = 'Click me!'
  clickMessage = ''

  bindingMessage = ''

  // isActive = true

  isVisible = true

  getBlogApi: Subscription

  readonly image_url: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt2-MqPUfv2VkQ8KkoXVz0fYwjbu_eVq3PSw&s'

  products: ProductItem[] = [
    {id: 1, name: 'samba og', price: 400000, image: this.image_url },
    {id: 2, name: 'nike f1', price: 500000, image: this.image_url},
    {id: 3, name: 'addidas f2', price: 600000, image: this.image_url},
    {id: 4, name: 'mlb f3', price: 4000000, image: this.image_url},
  ]

  title
  constructor( private BlogService: BlogService) {
    console.log('Initalize Component');
    this.getBlogApi = new Subscription;
    this.title = 'Đang có ca cấp cứu huy động toàn bệnh viện. Yêu cầu hỗ trợ khẩn cấp các bác sỹ tại phòng 102';
  }


  // Khi template html đã được hiển thị
  ngOnInit(): void {
    console.log('Component initialized');
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    
    this.getBlogApi = this.BlogService
    .getBlogs()
    .pipe(
      map(({ data }) => {
        return data.map((item: any) => ({
          ...item,
          id: item.id,
          name: item.title,
          price: Number(item.body),
          image: this.image_url
        })).filter(product => product.price > 0)
      })
    )
    .subscribe( (res) => {
      this.products = res;
    } );  
  }

  // ngDoCheck(): void {
  //   console.log("Check component");
  // }

  ngOnDestroy(): void {
    if(this.getBlogApi){
      this.getBlogApi.unsubscribe();
      console.log('Subscription destroyed');
    }
  }


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
      
      this.BlogService.deleteBlog(id)
        .subscribe(({data}:any) => {
          if(data == 1){
            this.products = this.products.filter(item => item.id !== id);
          }
        })
    };

  handleChangeVisible = () => {
    this.isVisible = !this.isVisible;
  }

}