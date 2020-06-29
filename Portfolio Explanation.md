# Explanation of Portfolio

#### What the portfolio is supposed to do

#### By Alan Wickham. Version 29/06/2020

## Context

I'm looking for a career change, so I'm following the Epicodus boot camp online.  As I go I'll learn new
techniques and approaches. Building this portfolio:

* Gives me practice and reinforces what I've learned
* Forces me to extend beyond the course material
* Demonstrates that I am can make a useful contribution to a team  

## Racecar Game

While the game itself was an interesting project, I also wanted to build something that I could use for future refactoring projects based on what I will learn later in the course.

At the point this project was started I had learned about HTML and Bootstrap, and some Javascript but not arrays and loops.

# Grid
 I wanted to build in the flexibility to place icons in different places in future versions. At that point I didn't have the tool to properly isolate the icon, so each icon had a black or grey edge of colour that would blend with the background colour, as long as the icon was placed in exactly the right place. 
 
 I quickly found out that Bootstrap grid is fine for big blocks, but hopeless for the level detail needed to turn a photograph of a floor mat into an onscreen map. I found the grid tools, and built a system of a 20x20 grid that roughly aligned to the playing squares. Within each grid, a subsidiary 3x3 grid was built to allow exact placing of the icon. This then had to become a 4x4 grid to allow placing of the cars. Then I discovered div contexts really matter when trying to use z index to put cars on top of icons and then hiding them behind icons.  The final solution of a very fine grid based on viewwidths scales ended up providing a single div context and enough flexibility to place every icon and car in the right place.

#  Arrays and looping
 Part of the challenge was to build the game not using arrays (which I knew about from Python but hadn't learned in Javascript).  I expect to learn more powerful database tools than simple arrays. In the original game successive cards are turned over from a stack of cards which is probably almost ideal looping through a simple array. But currently each card turn is a fresh 1 in 32 chance. I expect this will be an early refactoring project.

 # Graphic design and game play
 I have no pretention to be a graphic designer.  I love good visual design but I have no skill in identifying what makes for good design, nor have I invested time to learn graphic design tools. I found online isolation tools in time to isolate the vehicles but not the icons. It is doubtful I will bother refactoring the graphic design although it clearly could do with some. There is a strange sequencing issue in the card flip. Even though the flip comes at the end of the Javascript sequence, it seems to not work unless there is a break.  The "Are you ready" alert provides this break. In a similar way, there is a problem with removing the vehicle when both cars are on the same spot, and this is fixed by always removing the class from the shared spot positions, irrespective of the number of cars on the spot.  These fixes are pretty ugly, but they work and perhaps are of less interest to me to fix properly.

## Known Bugs

 The "do you want to block repeated alerts" message on the alerts is probably a setting somewhere that I will find at some point.
 It isn't possible to run web developer tools until the page is properly loaded due to errors in the Bootstrap library. 


Copyright (c) 2020 Alan Wickham