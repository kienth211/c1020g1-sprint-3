import {Component, OnInit, ViewChild} from '@angular/core';
import {CartDish} from '../../models/CartDish';
import {Cart} from '../../models/Cart';
import {User} from '../../models/User';
import {Dish} from '../../models/Dish';
import {NgbCarousel, NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {
  dish: Dish;
  cartDish: CartDish;
  dishAmountOrdered: number;
  selected = 0;
  hovered = 0;
  readonly = false;
  images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  constructor() {
  }

  ngOnInit(): void {
    this.dish = new Dish(1, 'nem ran');
  }

  addProductToCart() {
    this.cartDish = new CartDish(this.dish, null, this.dishAmountOrdered);
    console.log(this.cartDish);
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}
