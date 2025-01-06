import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [ 
  ],
  templateUrl:  './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  id =''

  constructor(private route: ActivatedRoute) {
    this.id = String(route.snapshot.paramMap.get('id'));
  }
 
}