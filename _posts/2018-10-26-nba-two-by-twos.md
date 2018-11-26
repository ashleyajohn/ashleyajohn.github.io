---
layout: post
title: "Up and to the Right: NBA "
date: 2018-10-26
---

The NBA is back and a few weeks in, so what better time than to look backwards! A friend in Northwestern's design program mentioned his classmates' obsession with 2 x 2 graphs - plotting silly things like Ability to Dunk vs. Holding Their Breath under Water. I was interested in the ultra simplicity of the design, and though I wish I had statistics on these traits for NBA players, I had to settle for data from ESPN. 

First I made a quick web scraper to get the data from [ESPN's season stats](http://www.espn.com/nba/statistics/player/_/stat/scoring-per-game/sort/avgPoints/year/2018/count/1). Note that these are averages so they are super aggregated views of a player's performance. After all the data was collected, each stat was normalized to zero mean/unit variance. 

Once I had all the data, I got to the plotting. I made a simple scatter plot with each player's name and then added the distribution for the x and y axis along side it to get a better picture of what the league looked like as a whole for each stat. 

To get a handle on which players were truly exceptional, I shaded the 90th, 95th, and 99th percentile for each stat pair and then annotated the players that fell above each of those thresholds. So essentially, in each of the graphs, we are able to see the to 10th, 5th, and 1st percentile of performance! The exceptional players' names are highlighted based on what they are exceptional at: blue if in the top of bottom percentile in the x axis statistics, red if in the y axis statistic, and purple if both. 

Now that theese are plotted, let's take a look at some pairings. First: simple scoring - free throw percentage vs. field goal percentage. Intuition would tell you if someone is good at one they are good at the other, a shooter is a shooter, but of course that is not so clean. 

Centers and Guards don't perform too well in FT% though most are passable in terms of shooting from the field. Then there are the standouts who take that to the extreme like Clint Capela who are in the lowest percentile of FT% but are outstandingly good from the field. Important to note here for this pairing that the distributions of neither stat are perfectly normal. Free throw percentage has a long left tail, meaning there are a lot of players below average. The opposite is true for field goal percentage, where there is a long tail to the right. 

![FT_FG]({{ "/assets/ft_fg.gif" | absolute_url }})

Next in shooting: 2 point percentage vs. 3 point percentage. These two stats are certainly bound to have more of a relationship (one would think). Here we also start to see some of the names the casual NBA fan would know. Lebron is near average at 3 point shooting but exceptional at 2 point shooting. Steph is great at both. Russell Westbrook is not outstanding at either. The interesting names here are the players who are close to those All Stars: Karl Anthony Towns and Steph are neighbors as are Kelly Olynyk and Lebron. 

![2PT_3PT]({{ "/assets/2pt_3pt.gif" | absolute_url }})

Next let's see what players are doing besides shooting. Assists vs. field goal percentage! I really like this one becase it starts to lean toward playmaking and show which players are the ones delivering as well as setting up others. The tail on the assists distribution is long on the right, not what I would have expected but it does make sense given that only a few positions are truly responsible for passing a ton. The plot unearths the pure shooters like Kyle Korver and Anthony Tolliver compared to the masterminds of Chris Paul and James Harden (interesting follow up question is how many of their assists were to the other). Shout out to Spencer Dinwidde and Draymond in the bottom right, among the top guys facilitating play for their teammates. 

![ASSISTS_FG]({{ "/assets/assists_fg.gif" | absolute_url }})

Flip side then, who is scoring of the court AND delivering defensively on the other end? Well, Clint Capela and not too many others. Joel Embiid and KD up next to each other for being great at blocks per game is fun, as is Terry Rozier being in the bottom left :). Block per game as a skewed distribution with a long tail to the left indicating that the average blocks/game is larger than the median.

![FG_BLOCKS]({{ "/assets/fg_blocks.gif" | absolute_url }})

Finally, rebounds. These plots are only looking at offensive rebounds. I especially like this beacause it show my Sixers looking great, Ben Simmons and Joel Embiid great at assists and rebounds respectively. While there are a handful of players in that upper right quadrant, there are no players who are great at both, the closest being Giannis Antetokounmpo and Nikola Jokic. 
![ASSISTS_REB]({{ "/assets/assists_reb.gif" | absolute_url }})

Finally, offenensive rebounds and steals. My gut would tell me that these are similar players who are good at both but that is not so true. Paul George shows up for the first time and is exceptional at steals per game along with Jimmy Butler. Enes Kanter is hanging out there over in the right with stellar offensive rebounds and finally Russ gets some positive love in the upper right. 
![REBS_STEALS]({{ "/assets/rebs_steals.gif" | absolute_url }})


[Code for this project can be found on my Github.](https://github.com/ashleyajohn/nba-quadrants)

Overall, these plots are tremendous simplifications of NBA player stats. A truer representation would be a 22 dimensional plot from a zillion simulations. But, reality is all we have for better or for worse. 
