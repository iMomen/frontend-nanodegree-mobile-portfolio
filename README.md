## Website Performance Optimization portfolio project

My submission for the fourth project on Udacity

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).



####Part 1: Optimize PageSpeed Insights score for index.html


1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

### Modifications 
* Minify and compress CSS files.
* Remove unnecessary comments and lines from HTML.
* Add async to the render blocking Javascript files.
* Use the web fonts script which is make loading the fonts is not blocking rendering.


####Part 2: Optimize Frames per Second in pizza.html


### Modifications 
* Remove the .mover class styles from the js file and put it in a CSS file.
* Add " backface-visibility " attribute to accelerate painting.
* Move un-touched variables outside the loop on changePizzaSizes function.
* Reduce generated sliding pizzas when the page loads.
* Create the variable " pizzasDiv " outside the loop to make only one DOM call.
* Create a local variable to store the sliding pizzas array length.
* Create the " phase " variable outside the loop.
* Create the img DOM element outside the loop.
* Remove all " querySelector " from code and replace it with getElementById and " getElementsByClassName " which is faster.
* Reduce background pizzas from 200 to 35.