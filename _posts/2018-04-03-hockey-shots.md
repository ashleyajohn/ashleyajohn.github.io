So, somehow the Stanley Cup Playoffs start in just over a week?!

I have no idea how the past six months flew by, and in the craziness of grad school and job searching and life in general, my Flyers are left fighting for a spot in the Metro as the clock winds down. Hockey is notably based on luck. It is difficult to predict, and unlike basketball which is essentially an endless coin flip back and forth, hockey is determined by small actions. A single player shining or failing can cost a team a game.

So, as I am working on creating my own hockey predictive model this summer, I decided to simply look at some visualizations to further appreciate the game. To do this, I wanted to look at the types of shots that hockey players take out there on the ice. I will admit, the main source of this investigation started because I am absolutely stunned by a good slap shot. The courage and skill it takes to send a puck flying makes my heart stop every single time. To explore this, I used Money Puck’s shot data found here.

First, just to lay the ground work of the space we are working in here, let’s just remember how hard it is to score a goal in hockey. With the average save percentage of NHL goal tenders hovering around 0.933, it takes immense skill to get the puck to the net in the National Hockey League.

Just looking at the count of shots taken above, a mere fraction of them actual result in a goal (shown as “1” here). The success rate stays about the same except for an uptick at the very end of the game when teams are pushing hard for a win and when teams pull the goalie. 

shotSuccessCount.png
At another angle here, we can see the success rate across the time span of a game.

shotSuccessPercent2.png
So, it is tough to make a goal in hockey. Just want to make sure that is understated!

Next, I wanted to look at how the position on the ice affected the likelihood of a goal. Following intuition, one might expect that if a shot is closer to the goalie, it is more likely to go in because there’s less obstacles in the way. However, as we’ve seen before, it’s really really hard to make a goal in the NHL and that’s mainly to do with how good NHL goalies are. Chances are, if you are taking a shot that close to the goalie, they are also able to track it pretty well.

For this analysis, I looked at the position of the player and the type of shot being taken. The Money Puck data set contains the following breakdown of shots from each of the five positions: Center, Left Wing, Right Wing, Defenseman, and Goalie:

positonBreakdown.png
And for the types of shots, we have Wrist, Slap, Snap, Tip, Deflection, and Wrap (and Donner and Blitzer—just kidding).

shotBreakdown.png
Even with the huge number of wrist shots, there is still a fair amount of data on each of the shot types to do a solid analysis. Though there aren’t many points on goalie data, I kept them in the mix for the sake of some fun.

To explore this further, I used the x and y coordinates in the Money Puck data, which plots the shot locations using the coordinate grid shown below. Also indicated is the shot angle, which we will discuss later. 

rink.png
The x coordinate first indicates that the type of player and type of shot taken is greatly affected by the x distance. Forwards tend to take and make most shots up close to the goal, and defenders take them further away. That bump for defensemen at about 25 feet? That’s the blue line. Pretty much as one would expect in this department.  

PositionX.png
What about the types of shots players are taking? They follow our traditional logic too, but with some interesting nuances. Wrist shots are taken all over the place but are most successful up close as are snap shots; slapshots are taken further away but have an equal effectiveness all over; back handers, tips, and deflections are all up close exclusively. I am obsessed with that tight distribution of the wrap around, one that looks almost perfectly symmetric, telling me that players only attempt wrap around shots if they think it’ll actually work out.

TypeX.png
The data on the y coordinates follows in suit. Defensemen spread themselves along the blue line, shooting from near either point while forwards tend to center themselves. Even though defensemen tend to spread themselves out, they have better luck too when they are closer to the center of the ice.

PositionY.png
For the types of shots, we see our intuition mirrors in the data. Slap shots are taken from the edges and nearly everything else is taken up close near the center. Again, I love the symmetry of the wrap around shot, always taken just a few feet adjacent to the goal, with a slight favoring toward the goalie's stick side. 

TypeY.png
Combining the x and y coordinates of the shots, we can understand the distance from where the shot was taken. The distance represents the Euclidean distance from the shooter to the goal. As we’d expect, forwards tend to take and make their shots up close while defensemen stay further back. What is interesting for defensemen though is that even though they take most of their shots from further away, their successful shots are fairly evenly spread out, suggesting that they could be more generous in taking shots closer.

PositionDistance.png
Similarly, the types of shots taken depend on the distance from the goal. Slap shots are taken far away whereas everything else tends to happen up close and personal. One interesting finding here is that even with all the wrist shots, they are only really successful at a close distance. Once again—bow to the incredible talent of NHL goalies!

TypeDistance.png
Next, I took a closer look at the angle of the shot. In this case, 0⁰ represents directly in front of the goalie, or directly at center as shown in the previous rink diagram. Again, we see that forwards tend to shoot from the center of the ice and defensemen from at a higher angle. 


The types of shots taken per angles again follows our intuition. Most shots—even my beloved slap shot—are best when they are centered. Everything except the pesky wrap around shot which works only at near parallel to the goal line (sorry, still blows my mind!). This graph is also interesting because of the reflection of the backhand and the wrap around shot: polar opposites in terms of their angle. 


Finally, the ever-present variable hanging over every hockey player’s head is time. To take a moment to wax poetic about why I adore this sport: hockey is a fool’s race against time. The best players know how to manipulate the clock and the players on the ice to wait for the perfect moment to release the puck from their stick. It’s a beautiful thing. Just look at the patience that Claude Giroux has in this OT game winning goal—it’s pure magic.


Sons of Penn
@SonsofPenn
 OH CAPTAIN, MY CAPTAIN! What a shot!

3:05 PM - Apr 1, 2018
447
165 people are talking about this
Twitter Ads info and privacy
So, how do the shots perform against time? Well, it turns out that they don’t care as much. Time erases everything, including differences in who is taking and making what kinds of shots. The only interesting bump is at the very end of the games when wrist shots and subsequently forwards see a little bump in success.

PositionTime.png
TypeTime.png
Hockey is a magical game, and I am absolutely positive the playoffs will bring us some more mind-blowing data to explore. Let's see if Philadelphia's good luck can last a bit longer. 

All code can be found on my GitHub.
