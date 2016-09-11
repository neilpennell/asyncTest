import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Component({
  selector: 'my-app',
  template: `
  	<h1>My First Angular 2 App</h1>
	<p>Clock: {{clock|async}}</p>
  `
})
export class AppComponent { 
	clock = Observable.interval(1000);
	
	constructor(){
		this.clock.subscribe(console.log.bind(console));
	}
}
