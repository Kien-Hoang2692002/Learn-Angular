import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/BlogService';
import { ProductItem } from '../shared/types/product-item';
import { OHImageModule } from '@onehealth/ui/image';
import { OHRateModule } from '@onehealth/ui/rate';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [ 
    OHImageModule,
    OHRateModule,
    ReactiveFormsModule
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
    rating: 0,
  }

  constructor(private route: ActivatedRoute, private blogService: BlogService) {
    this.id = String(route.snapshot.paramMap.get('id'));
  }

  ratingControl = new FormControl(this.productItem.rating);

  tooltips = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

  ngOnInit(): void {
    this.blogService.detailBlog(+this.id)
    .subscribe(({ data }: any) => {
        this.productItem.id = data.id;
        this.productItem.image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt2-MqPUfv2VkQ8KkoXVz0fYwjbu_eVq3PSw&s";
        this.productItem.name = data.title;
        this.productItem.price = data.body;
        this.ratingControl.setValue(this.productItem.rating);
    }) 
  }

  onRateChange(newRating: number) {
    console.log('New rating:', newRating);
    this.productItem.rating = newRating;
  }
 
}