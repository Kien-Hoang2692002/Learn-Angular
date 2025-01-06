import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/BlogService';
import { ProductItem } from '../shared/types/product-item';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [ 
  ],
  templateUrl:  './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id =''
  productItem: ProductItem = {
    id: 0,
    name: '',
    image: '',
    price: 0,
  }

  constructor(private route: ActivatedRoute, private blogService: BlogService) {
    this.id = String(route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.blogService.detailBlog(+this.id)
    .subscribe(({ data }: any) => {
        this.productItem.id = data.id;
        this.productItem.image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt2-MqPUfv2VkQ8KkoXVz0fYwjbu_eVq3PSw&s";
        this.productItem.name = data.title;
        this.productItem.price = data.body;
    }) 
  }
 
}