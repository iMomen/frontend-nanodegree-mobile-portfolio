## Website Performance Optimization portfolio project

My submission for the fourth project on Udacity

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).



####Part 1: Optimize PageSpeed Insights score for index.html
* Minify and compress CSS files.
* Remove unnecessary comments and lines from HTML.
* Add async to the render blocking Javascript files.
* Use the web fonts script which is make loading the fonts is not blocking rendering.


####Part 2: Optimize Frames per Second in pizza.html

* Remove the .mover class styles from the js file and put it in a CSS file.
* Add " backface-visibility " attribute to accelerate painting.
* Move un-touched variables outside the loop on changePizzaSizes function.
* Reduce generated sliding pizzas when the page loads.
* Create the variable " pizzasDiv " outside the loop to make only one DOM call.
* Create a local variable to store the sliding pizzas array length.
* Create the " phase " variable outside the loop.
* Create the img DOM element outside the loop.
* Remove all " querySelector " from code and replace it with getElementById and " getElementsByClassName " which is faster.