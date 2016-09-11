import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent { 
	clock = Observable.interval(1000);
	
	constructor(){
		this.clock.subscribe(console.log.bind(console));
	}
}
