import { Component, OnInit } from '@angular/core';
import { Category } from '../models/Category';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  woCategories: Category[] = [];
  constructor() {
    this.defaultCategories();
   }

  ngOnInit() {
    
    
  }
  private defaultCategories(){
    var cat = new Category(1, "Weight Lifting", 2);
    var cat2 = new Category(2, "Running", 2);
    this.woCategories.push(cat);
    this.woCategories.push(cat2);
  }
}

