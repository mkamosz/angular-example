# Angular example

Simple angular application for get data / show / edit / delete<br>
Now thera are mock url's.<br>
To set for testing please change in app.mdl.js file `mockData` for false


## Installation
* clone this repo
* run `npm install` from project folder
* run `gulp`
* open browser and go to your localhost address  and then  **/app**
* Aplication should start

## Key components and features:
* `assets` - catalog for static stuff - less, img, css, fonts, js(angular.js,angular-route.js,angular-sanitize.js)
* `common` - catalog for common directives, filters, controllers, services
* `core` - catalog for templates and controllers for pages
* In main catalog there are `index.html` and controller `index-ctrl.js` inside `index.html` file there are loaded css files and javascript files ,
  and two more files `app.mdl.js` and `app.rout.js`

## TODO
* tests for controller HomePageController
* validation for editable fields
* datepicker for birth field
