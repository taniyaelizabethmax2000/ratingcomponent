import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    
  }

  reviewMessage: string = '';
  starValue: number = 0;

  submitReview() {
    console.log(this.reviewMessage);
    console.log(this.starValue);
  }

  clearAllData() {
    this.reviewMessage = '';
    this.starValue = 0;
  }

}
