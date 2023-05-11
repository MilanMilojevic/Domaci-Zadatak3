import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-second-app';

show=false;
times: number [] = [];
i=0;

onClick(){
  this.show=!this.show;
  this.times[this.i]=this.i;
  this.i++;
  }
}
