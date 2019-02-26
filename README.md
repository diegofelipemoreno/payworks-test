# payworks-test
payworks-test

## Site url
https://pensive-wiles-c45a4e.netlify.com/

## To Run it
1. npm install 
2. npm run dev
3. Open the app on http://localhost:3000

## Main tools
    - Webpack (development and production scaffolding)
    - Vanilla Javascript ES6
    - Sass compiler
    - Github Api

## Comments
The app was development on Vanilla Javascript (Class instance component), 
setting a main component (SearchComponent), which one contains 
the secundary components (FilterComponent, ResultsComponent, PaginatorComponent).

Throught this Composition pattern the app properties/behaviours could be more maintainable
and easy to manage for future developments. Also mention that each component could be scaled wihout 
compromise the app structure.

Also you can find mixins/utils, global methods, that could access from any component such as:
(service.js, util.js)

All the javascript scaffolding has js linters which ensures the good practices of code.
Unfortunatly the time ran out and I could not development the Unit Test need for the app.

I hope you can enjoy the app and the development behind it.

