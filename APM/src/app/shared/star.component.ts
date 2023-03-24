import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number = 0;
  cropWidth: number = 75;
  @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();

  ngOnChanges(): void {
    this.cropWidth = this.rating * 75 / 5;
    // - Max pixel width for 5 stars / 5 = pixels required for 1 star 
    // - Then Multiply 1-star pixel with by star rating numeric value 
  }

  onClick(): void {
    // call emit() on the component @Output event above to pass the message 
    // to the containing product list component
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    // console.log(`The rating ${this.rating} was clicked..`)
  }
}