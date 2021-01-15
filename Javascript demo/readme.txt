Behold a javascript demo!

There's a few things to check out here. First of all, this was made from html-template from Adam's class so don't judge!


THE ELEMENTS

Here we have two html pages: html-template.html and second.html. 
We'll count these as two separate pages even though they're basically identical--
but remember, they COULD be very different. Think Education page vs Skills page vs Portfolio page, ie.

Then we have two stylesheets. Again, identical, but they COULD be very different.
Each html page is linked to its own stylesheet. If you want overlapping styles, you could link both to the same css.
You could even link them both to one overarching stylesheet and then individual sheets for individual styles! 
You can link multiple stylesheets, and then any style is accessible.

Then we have the javascript file. Again, you can link multiple js files and organize your code, 
only sharing certain functions with certain pages, for example.


THE CODE: HTML

In the HTML files, we link the JS files at the end of the body, like where the bootstrap links are.
In this case, the two HTML files differ in the heading-- one is just HEADLINE and the other is SECOND HEADLINE.
Then, we have a button just above the headline.

The html button uses an html tag and the onclick attribute-- link onlick to the name of your javascript function,
or what you want to happen when the button is clicked.
CSS doesn't often care about JS, but you do need to assign each button its own ID in order to be grabbable from JS.
Otherwise, JS doens't know which button you're talking about.


THE CODE: JAVASCRIPT

First, we assign shorter variables to the buttons we want. 
Since this js file is linked to both html files, it can see all elements in both files.

Then, we assign event listeners to the buttons. Basically, we want the buttons to pay attention to when they're clicked!
If they don't know to watch for clicks, they won't activate their functions.
The first argument is what event to listen for, and the second is what we want them to do about it.

Then we make our actual functions. THe functions have no arguments.
All we want is for the document (the whole entire webpage object) to change its location (what html file it gets its info from).
So we set the location to a local html file. The location changes, and we see a different page.


THAT'S IT

You connect the html to  js script, you attach the button to the function, 
you tell the button to watch for clicks, and you tell it what to do in that case.

This concept can be used in SO many cooler cases than this. Let me know if you have any questions!
--Rachel

