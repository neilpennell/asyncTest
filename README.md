# minimal app to demonstrate issue with neo4j-javascript-driver and angular 2

This is a minimal Angular 2 application to demonstrate the async issue with neo4j-javascript-driver.

## recreate issue

All instructions assume a *inux environment - specifically tested on Mac OS X El Capitan (10.11.6)

* git clone https://github.com/neilpennell/asyncTest.git
* cd asyncTest
* npm install && npm run typings install && npm start

You should see a screen that looks like "screencap/01 - working 1 of 2.png" and if you look at Web Inspector you will see a console that looks like "screencap/01 - working 2 of 2.png".

Edit app/app.component.ts - see "screencap/02 - working code.png" and uncomment line 5 to be "screencap/03 - uncomment to break.png"

This results in the browser not updating "screencap/04 - broken async - inspector.png" and the Web Inspector showing the code still updating "screencap/04 - broken async -browser.png"


Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")
