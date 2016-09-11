import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

import 'node_modules/neo4j-driver/lib/browser/neo4j-web.min.js';



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
