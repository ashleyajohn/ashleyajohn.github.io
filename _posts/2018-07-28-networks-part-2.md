---
layout: post
title: 'Complete Migration Network'
jsarr:
- graphs/randomnetwork.js
---
In [Part 1 of this analysis](https://ashleyajohn.github.io/2018/07/28/networks-part-1.html) I began using migration data from the US Census about movement between metropolitan areas in the United States. 

First, I was curious to know which cities were attracted the most and the fewest new residents. To do this, I had to clean the data a little bit. First I had to get rid of dupliate rows. Even though the data set was mostly clean, some rows were dupliates because they contained data on the same path. For example, there would be a row for migration between Dallas and Austin and a separate row for migration between Austin and Dallas. The information in these rows were exactly the same exect the origin and destination cities were swapped. To account for this, I created a key called "check_string" and then removed duplicate rows based on this field. 

After this was cleaned, I grouped by the origin city and summed the net migration for each of the unique areas. Since there were over 300 cities in the data set, I was more interested in the cities who had the largest and smallest migrations. I plotted the Top 10 and Bottom 10 areas based on the net migration: 


The winners in the largest net positive migration were all smaller cities, known to be on the rise such as Austin, Houstin, Phoenix, and Charlotte. On the flip side, the nation's largest cities like New York, LA, Chicago, and DC all has a top 10 negative net migration. Part of this is likely due to the transient nature of residents in the nation's largest cities. Many people move to these areas knowing that is not where they will live long term. However, it is interesting that smaller cities showed such steady positive growth that the largest areas were not even remotely close to offsetting their losses. 

Next I was intereted in the paths that see the largest net positive and negative migrations. Specifically, this looks at the precise origin and destination cities on either end. In these two plots, the y axis is the path of migration shown as "Origin - Destination": 

In this case, a net positive migration means that the origin city gained more residents than it lost. For example, Miami won out with the highest net positive residents coming into the city from New York. As expected, cities who had some of the highest net negative migrations like New York and LA contributed to some of the largest migration paths. Nine out of tean of the top migration paths were related to one of the cities with the lowest net migration.  
<div id="mynetwork" style="height: 1000px; width:1000px"></div>
