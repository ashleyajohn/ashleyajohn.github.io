---
layout: post
title: "Up and to the Right: NBA "
date: 2018-10-26
---

The NBA is back and a few weeks in, so what better time than to look backwards! A friend in Northwestern's design program mentioned his classmates' obsession with 2 x 2 graphs - plotting silly things like Ability to Dunk vs. Holding Their Breath under Water. I was interested in the ultra simplicity of the design, and though I wish I had statistics on these traits for NBA players, I had to settle for data from ESPN. 

First I made a quick web scraper to get the data from ESPN's season summaries. Note that these are averages so they are super aggregated views of a player's performance. 

Once I had all the data, I got to the plotting. I made a simple scatter plot with each player's name and then added the distribution for the x and y axis along side it to get a better picture of what the league looked like as a whole for each stat. 

To get a handle on which players were truly exceptional, I shaded the 90th, 95th, and 99th percentile for each stat pair and then annotated the players that fell above each of those thresholds. So essentially, in each of the graphs, we are able to see the to 10th, 5th, and 1st percentile of performance! The exceptional players' names are highlighted based on what they are exceptional at: blue if in the top of bottom percentile in the x axis statistics, red if in the y axis statistic, and purple if both. 

![FT_FG]({{ "/assets/ft_fg.gif" | absolute_url }})
![2PT_3PT]({{ "/assets/2pt_3pt.gif" | absolute_url }})
![ASSISTS_FG]({{ "/assets/assists_fg.gif" | absolute_url }})
![ASSISTS_REB]({{ "/assets/assists_reb.gif" | absolute_url }})
![FG_BLOCKS]({{ "/assets/fg_blocks.gif" | absolute_url }})
![REBS_STEALS]({{ "/assets/rebs_steals.gif" | absolute_url }})


[Code for this project can be found on my Github.](https://github.com/ashleyajohn/nba-quadrants)
