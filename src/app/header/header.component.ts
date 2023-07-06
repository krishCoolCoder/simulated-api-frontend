import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  homeClick = false;
  featuresClick = false;
  pricingClick = false;
  faqClick = false;
  aboutClick = false;
  onHomeClick(){
    console.log("Hello world;")
    this.featuresClick = !(this.featuresClick)
  }
  onFeaturesClick(){
    console.log("Hello world;")
  }
  onPricingClick(){
    
  }
  onFaqClick(){

  }
  onAboutClick(){

  }
}
