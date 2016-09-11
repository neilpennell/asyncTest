# Minimal app to demonstrate issue with neo4j-javascript-driver and angular 2

This is a minimal Angular 2 application to demonstrate the async issue with neo4j-javascript-driver.

The app does nothing more than print the number of seconds since it started on the browswer and in the console.

## Setup

All instructions assume a *inux environment - specifically tested on Mac OS X El Capitan (10.11.6)

* git clone https://github.com/neilpennell/asyncTest.git
* cd asyncTest
* npm install && npm run typings install && npm start

## Recreate Issue 

### Show that it is working

You should see a screen that looks like 
![alt text](https://raw.githubusercontent.com/neilpennell/asyncTest/master/screencap/01%20-%20working%201%20of%202.png "screencap/01 - working 1 of 2.png") 
and if you look at Web Inspector you will see a console that looks like
![alt text](https://raw.githubusercontent.com/neilpennell/asyncTest/master/screencap/01%20-%20working%202%20of%202.png "screencap/01 - working 2 of 2.png") 

### Make the change

Edit app/app.component.ts - see 
![alt text](https://raw.githubusercontent.com/neilpennell/asyncTest/master/screencap/02%20-%20working%20code.png "screencap/02 - working code.png" )
and uncomment line 5 to be 
![alt text](https://raw.githubusercontent.com/neilpennell/asyncTest/master/screencap/03%20-%20uncomment%20to%20break.png "screencap/03 - uncomment to break.png" )
Save the file.


### Show the breakage

This results in the browser not updating 
![alt text](https://raw.githubusercontent.com/neilpennell/asyncTest/master/screencap/04%20-%20broken%20async%20-browser.png "screencap/04 - broken async - inspector.png" )
and the Web Inspector showing the code still updating 
![alt text](https://raw.githubusercontent.com/neilpennell/asyncTest/master/screencap/04%20-%20broken%20async%20-%20inspector.png "screencap/04 - broken async -browser.png" )

